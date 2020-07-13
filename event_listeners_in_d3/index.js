const d3 = require("d3"),
  jsdom = require("jsdom");

const document = jsdom.jsdom(),
  svg = d3.select(document.body).append("svg");

d3.select("#new-note").on("submit", function () {
  d3.event.preventDefault();

  const input = d3.select("input");
  d3.select("#notes").append("p").classed("note", true).text(input.property("value"));
});
