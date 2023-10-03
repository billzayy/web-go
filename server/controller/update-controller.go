package controller

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/billzayy/web-go/server/models"
	"github.com/billzayy/web-go/server/routes"
	"github.com/gin-gonic/gin"
)

func UpdateUserController(c *gin.Context) {
	var update models.User

	err := json.NewDecoder(c.Request.Body).Decode(&update)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "Failure", "data": err})
	}

	updateResult, err := routes.UpdateUser(update)

	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{"status": "Failure", "data": err})
	} else {
		c.JSON(http.StatusOK, gin.H{"status": "Successful", "data": updateResult})
	}
}
