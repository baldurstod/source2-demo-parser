package main

import (
	"os"
	"fmt"
	"path"
)

func main() {

	demoDatas, _ := os.ReadFile(path.Join("var", "7382065860_1966034883.dem"))
	parse(demoDatas)

}


func parse(dat []byte) {
	fmt.Println(len(dat))
}
