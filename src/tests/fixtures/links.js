export default [{
    text: "Internal link",
    href: "/",
    internal: true
}, {
    text: "External link",
    href: "https://www.google.com",
    internal: false
}, {
    text: "Internal link with sublink",
    href: "/",
    internal: true,
    sublinks: [{
        text: "Internal sublink",
        href: "/",
        internal: true
    }]
}, {
    text: "External link with sublink",
    href: "https://www.google.com",
    internal: false,
    sublinks: [{
        text: "External sublink",
        href: "https://www.google.com",
        internal: false
    }]
}]