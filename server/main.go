package main

import (
	"github.com/gofiber/fiber/v2"
	"twitter-clone/server/db"

)

func main() {
	database.Connect()
	app := fiber.New()
	app.Static("/", "../client")
	app.Listen(":3000")
}
