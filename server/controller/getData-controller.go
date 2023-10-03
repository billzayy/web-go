package controller

import (
	"fmt"
	"net/http"

	"github.com/billzayy/web-go/server/routes"
	"github.com/gin-gonic/gin"
)

func GetUserController(c *gin.Context) {
	getAllUser, err := routes.GetUser()

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "Failure", "data": err})
		fmt.Println(err)
	} else {
		c.JSON(http.StatusOK, gin.H{"status": "Successful", "data": getAllUser})
	}
}
