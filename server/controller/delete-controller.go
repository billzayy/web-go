package controller

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/billzayy/web-go/server/models"
	"github.com/billzayy/web-go/server/routes"
	"github.com/gin-gonic/gin"
)

func DeleteUserController(c *gin.Context) {
	var deleteUser models.User

	err := json.NewDecoder(c.Request.Body).Decode(&deleteUser)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "Failure", "data": err})
	}

	fmt.Println(deleteUser)
	deleteResult, err := routes.DeleteUser(deleteUser)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "Failure", "data": err})
	} else {
		c.JSON(http.StatusOK, gin.H{"status": "Successful", "data": deleteResult})
	}
}
