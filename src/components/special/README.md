The "special" folder is used for one-off components. With the new app-directory, every file within the app folder is considered server-side by default. This includes in files imported unless explicity stated to be client side with "use client".

As of writing this, there is an experimental server actions feature. So, I've created a special folder for components that are used on the client-side and are one-off components. i.e. gsap animations on particular sections.
