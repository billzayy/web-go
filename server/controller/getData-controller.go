package controller

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/billzayy/web-go/server/routes"
	"github.com/gin-gonic/gin"
)

func GetUserController(c *gin.Context) {
	getAllUser, err := routes.GetAllUser()

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "Failure", "data": err})
		fmt.Println(err)
	} else {
		c.JSON(http.StatusOK, gin.H{"status": "Successful", "data": getAllUser})
	}
}

func GetUserById(c *gin.Context) {
	inputParam, err := strconv.Atoi(c.Param("id"))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "Failure", "data": err})
	}

	result, err := routes.GetUserById(inputParam)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "Failure", "data": err})
	} else {
		c.JSON(http.StatusOK, gin.H{"status": "Successful", "data": result})
	}
}
