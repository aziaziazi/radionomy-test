# Goal

#### Introduction

This is a quick job test. The goal is to implement a selectable and expendable list of music genres. I also implemented the rest of the page's elements to have a better view of what it looks.
  
#### Interaction
Clicking a chip select the corresponding genre. Cliking again unselect it.

Cliking the chip's **+** buton expend it to show the sub-selected chips. Cliking it again collapse.
**Previous Step** and **CONTINUE** buttons change the *step number* in the store which update the step counter on the top os the title.

# Usage

#### Live

[Try the app here.](http://camillegabrieli.com/radionomy-test/)

#### Development

The *Create-React-App* process is straightforward :

```
git clone https://github.com/aziaziazi/radionomy-test.git
cd radionomy-test
npm install
npm start
```

# Todos

- Add:
  + Animations.
  + Others Steps (at least placeholders).
  + Auto-complete field to search a genre.
  + Station-Type and Stream-Speed selection.
  + PropTypes and tests.
- Fix:
  + Limit the number of genre that can be select.
  + Limit the steps navigation between 1 and 5.
  + Handle the real data's JSON.
  + make Chips' **+** button bigger.
  + Don't allow to collapse a parent chip that has subChip selected. Alternative behavior: style the parent chip specialy to let know a genre is selected inside.

# Notes on the data structure.

I chage the data structure as bellow to store each genre, their data and their state. I choosed to flattent it (the original file was made of nested objects) to ease the later mapping throught the list. It's only a mock for now but it wouldn't be very difficult to create a function that fetch the datas from an API and re-arrange it in this shame.

```js
'genres' : [
  {
    // Name and ID
    "name": "Blues",
    "ID": 190,
    
    // Helper to render first the Parent genres
    "isParentGenre": true,

    // Used by the subGenres to store their Parent ID
    "parentGenreID": null,

    // Store the states of the genre
    "expended": false,
    "selected": false,
  },{...},{...},{...}
]
```

The previous shame is easy to use but most of the time I perform an action or render a Chip I need to map through all the genre list. Although I didn't notice any performance issue, I whould now use a dedicated array. It will slightly complexify the store, but it will be way easier and quicker to use later on.

```js
// Selected and Expended genres ID's stored in an array.
`selectedGenres` : []
`ExpendedGenres` : []

'genres' : [
  {
    "name": "Blues",
    "ID": 190,
    "parentGenreID": null,
  },{...},{...},{...}
]
```

I might also consider moving the ID's as a name for the genre's object. That could be even faster ans easier to use.

```js
`selectedGenres` : []
`ExpendedGenres` : []

'genres' : [
  190: {
    "name": "Blues",
    "parentGenreID": null,
  },
  191: {...},
  192: {...},
  193: {...}
]
```

