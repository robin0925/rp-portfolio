/* paste this in verbatim */
window.formbutton =
  window.formbutton ||
  function () {
    (formbutton.q = formbutton.q || []).push(arguments);
  };

/* customize formbutton here*/
formbutton("create", {
  action: "https://formspree.io/f/mqknrnra",
  title: "How can I help?",
  fields: [
    {
      type: "email",
      label: "Email:",
      name: "email",
      required: true,
      placeholder: "your@email.com",
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    { type: "submit" },
  ],
  styles: {
    title: {
      backgroundColor: "#15c99b",
    },
    button: {
      backgroundColor: "unset",
      border: "solid 1px white",
    },
    path: {
      color: "black",
    },
  },
  initiallyVisible: true,
});
