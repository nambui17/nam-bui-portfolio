package routes

import (
	"github.com/gorilla/mux"
)

// Routes initializes the routes for the server
func SetupRouter() *mux.Router {
	router := mux.NewRouter()
	return router
}