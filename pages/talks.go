package pages

import (
	"atri.dad/lib"
	"github.com/labstack/echo/v4"
)

type TalkProps struct {
	Talks []lib.CardLink
}

func Talks(c echo.Context) error {
	talks := []lib.CardLink{
		{
			Name:        "Hypermedia as the engine of application state - an Introduction",
			Description: "A talk on building reactive websites using tools like HTMX instead of JSON + JS. Will be presented at the Dev Edmonton Fabruary 2024 JS/Ruby/Python Meetup",
			Href:        "/public/files/hypermedia_talk_atridad.pdf",
			Tags:        []string{"golang", "htmx", "ssr"},
			Date:        "February 01, 2024",
		},
		{
			Name:        "Introduction to Social Network Analysis (SNA)",
			Description: "Understanding Relationships in Social Structures",
			Href:        "/public/files/Understanding_Relationships_in_Social_Structures.pdf",
			Tags:        []string{"graphs", "social", "lecture"},
			Date:        "October 08, 2024",
		},
	}

	props := TalkProps{
		Talks: talks,
	}

	// Specify the partials used by this page
	partials := []string{"header", "navitems", "cardlinks"}

	// Render the template
	return lib.RenderTemplate(c.Response().Writer, "base", partials, props)
}
