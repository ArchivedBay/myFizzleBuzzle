# myFizzleBuzzle
my own personal interpretation of FizzBuzz c:

### Uses Plain'ol JS(tm) ###
  - I used a Document Fragment to append all my li's to in order to cut down on the amount of DOM interaction needed
  
  - In order to make things a bit simpler I gave each of the "boxes" an ID that also correlates to the associated sub-array       that contains each set of numbers. i.e ```<ul id="0">``` associates with numArray[0], and so on.
  
  - Other than that, it's your standard fizzbuzz type problem; where I checked to verify that it was divisible by both             numbers, before then checking each one independently so as not to have the program stop if say it checked "15" which is       divisible by BOTH, but if you don't specify the ```3 && 5``` check first, will get caught by the 3 or 5 check, and never       reach "FizzBuzz"
