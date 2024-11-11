/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67bb0f23-a725-47a4-a032-20d84c1a1482/dar38p1-1dadae78-4e41-49f0-ae92-9270cb2f60cb.png/v1/fill/w_1600,h_900,q_80,strp/retrowave_background_by_hayny_dar38p1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNjdiYjBmMjMtYTcyNS00N2E0LWEwMzItMjBkODRjMWExNDgyXC9kYXIzOHAxLTFkYWRhZTc4LTRlNDEtNDlmMC1hZTkyLTkyNzBjYjJmNjBjYi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5IgeIPny7f471I8WP6cCul0ro4xjV1CE9WvupE3wTBQ')",
      },
    },
  },
  plugins: [],
};

