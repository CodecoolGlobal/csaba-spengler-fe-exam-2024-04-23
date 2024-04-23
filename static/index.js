import data from "./data.js";

const root = document.querySelector("#root");

function create(tag, attributes = {}, children = []) {
  let el = document.createElement(tag);
  for (let key of Object.keys(attributes)) {
    el[key] = attributes[key];
    for (let child of children) {
      el.append(child);
    }
  }
  return el;
}

function main() {
  console.log(data);

  const intro = create(
    "section",
    {
      className: "intro",
    },
    [
      create("h1", {
        className: "intro__header",
        innerText: "Visualized and clarified by AI",
      }),
    ]
  );

  const container = create("section", {
    className: "container",
    content: "This section holds multiple card components.",
  });

  for (let key of Object.keys(data)) {
    container.append(
      create(
        "cards",
        {
          className: "card",
          content:
            "Each card represents a distinct component, technology, or information block.",
        },
        [
          create("div", {
            className: "card__header",
            innerText: data[key].title,
          }),
          create(
            "div",
            {
              className: "card__body",
            },
            [
              create(
                "div",
                {
                  className: "card__body__image",
                  content: "A wrapper for an image.",
                },
                [
                  create("img", {
                    src: data[key].image,
                    alt: data[key].title,
                  }),
                ]
              ),
              create("div", {
                className: "card__body__text",
                content: "Contains the descriptive text.",
                innerText:data[key].text
              }),
            ]
          ),
        ]
      )
    );
  }

  root.append(intro);
  root.append(container);
}

main();
