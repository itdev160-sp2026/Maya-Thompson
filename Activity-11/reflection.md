# Activity 11 Reflection: React Tic-Tac-Toe

## Key Learnings

1. **Components**

- Each components having their own use that then can connect and be used in
other components to make one big program

- The use of JSX that allows each component to actually directly interact with the user interface

2. **State**

- State is very fundemental to this game of tic-tac-toe as it re-renders whenever its setValue is triggered.

- It was interesting to implent and see how it changed when the Game component was added.


## Comparison

1. 

- This React version is way shorter than the Activity 10. It also makes use of less functions.

- The use of components definitely helps with its compactness compared to the vanilla JavaScript in Activity 10.


2. 
- The history function was decently manageable in React especially since we use the slice array method, I can't say the same would be as easy in our vanilla JS version.

- That doesn't even account for the HTML we would have to be aware of while we are doing the vanilla JavaScript, with the use of JSX I think React might be the easier way to implement it.

## Challenges

1. 

- Immutability was something that was confusing to me at first because I didn't take into account that everytime handleClick was called the slice array method would trigger.

- I understand now that every move is logged into an array which wouldn't be possible with just the original array.

2. 

- When history was implemented I ended up not noticing that square and setSquares of the useState was changed to history and left me a bit lost when working with the stored move arrays. 

## Next Steps

1. Further use of JSX and seeing what other differences are made by using these elements like how fragments are used.

2. State lifting as a whole is also something I want to look into more, it's said in the tutorial that it is usually used in refactoring and I want to look more into how you can make the code more stable, reusable, and organized using in.

## Conclusion

React is very interest way to use JavaScript that I'm very glad we ended up working with in the end. It does have some familarity with vanilla JavaScript and HTML with the use of JSX so it was fun for me to learn personally. I enjoyed seeing how to do things we did in Activity 10 in a different way and the use of React version elements work like useState() and even fragments was something I found to interesting. 