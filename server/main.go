package main

import (
	database "twitter-clone/server/db"

	"github.com/gofiber/fiber/v2"
)

func main() {
	database.Connect()
	app := fiber.New()
	app.Static("/", "../client")
	app.Listen(":3000")
}
