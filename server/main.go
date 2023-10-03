package main

import (
	"os"

	"github.com/billzayy/web-go/server/controller"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()

	app := gin.Default()

	api := app.Group("/api")
	{
		api.GET("/get-all-user", controller.GetUserController)
		api.GET("/get-user/:id")
		api.POST("/create-user")
		app.DELETE("/delete-user")
	}

	app.Run(":" + os.Getenv("PORT"))
}
