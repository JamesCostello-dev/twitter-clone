package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/go-sql-driver/mysql"
)

var db *sql.DB

type Timeline struct {
	ID       int64
	Username string
	Content  string
}

func Connect() {
	cfg := mysql.Config{
		User:   os.Getenv("DBUSER"),
		Passwd: os.Getenv("DBPASS"),
		Net:    "tcp",
		Addr:   "127.0.0.1:3306",
		DBName: "tweets",
	}

	var err error
	db, err = sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}

	pingErr := db.Ping()
	if pingErr != nil {
		log.Fatal(pingErr)
	}
	fmt.Println("\nConnected!")

	timeline, err := timelineByUser("UserOne")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("\ntimeline found: %v\n", timeline)

	time, err := timelineByID(1)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("\nTimeline found: %v\n", time)
}

func timelineByUser(name string) ([]Timeline, error) {
	var timeline []Timeline

	rows, err := db.Query("SELECT * FROM timeline WHERE username = ?", name)
	if err != nil {
		return nil, fmt.Errorf("timelineByUser %q: %v", name, err)
	}
	defer rows.Close()
	for rows.Next() {
		var time Timeline
		if err := rows.Scan(&time.ID, &time.Username, &time.Content); err != nil {
			return nil, fmt.Errorf("timelineByUser %q: %v", name, err)
		}
		timeline = append(timeline, time)
	}
	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("timelineByUser %q: %v", name, err)
	}
	return timeline, nil
}

func timelineByID(id int64) (Timeline, error) {
	var time Timeline
	row := db.QueryRow("SELECT * FROM timeline WHERE id = ?", id)
	if err := row.Scan(&time.ID, &time.Username, &time.Content); err != nil {
		if err == sql.ErrNoRows {
			return time, fmt.Errorf("timelineById %d: %v", id, err)
		}
	}
	return time, nil
}
