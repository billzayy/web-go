package controller

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/billzayy/web-go/server/models"
	"github.com/billzayy/web-go/server/routes"
	"github.com/gin-gonic/gin"
)

func CreateUserController(c *gin.Context) {
	var inputCreate models.User

	err := json.NewDecoder(c.Request.Body).Decode(&inputCreate)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "Failure", "data": err})
	}

	createResult, err := routes.CreateUser(inputCreate)

	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{"status": "Failure", "data": err})
	} else {
		c.JSON(http.StatusOK, gin.H{"status": "Successful", "data": createResult})
	}
}