package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/nambui17/nam-bui-portfolio/routes"
)

type spaHandler struct {
	staticPath string
	indexPath  string
}

func (h spaHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path := filepath.Join(h.staticPath, r.URL.Path)
	log.Println("Requested path:", path)

	fi, err := os.Stat(path)
	if os.IsNotExist(err) || fi.IsDir() {
		http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	}

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// otherwise, use http.FileServer to serve the static file
	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}

func main() {
	router := routes.SetupRouter()
	spa := spaHandler{staticPath: "../client/dist", indexPath: "index.html"}
	router.PathPrefix("/").Handler(spa)
	srv := &http.Server{
		Addr:         "127.0.0.1:8080",
		Handler:      router,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())
}
