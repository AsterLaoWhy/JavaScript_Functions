console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count)
{
    
    if (count > 0) {
        //positive count
        for (i = 0; i < count; i++)
        {
            if (i % 2 != 0) {
                console.log(i);
            }
            else {
                //pass
            }

        }
    }
    //negative count
    else
    {
        for (i = 0; i > count; i--) {
            if (i % 2 != 0) {
                console.log(i);
            }
            else {
                //pass
            }

        }
    }
}
printOdds(9);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName = "", age = 0)
{
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (userName == "" || age ===0)
    {
        console.log("Empty");
    }
    else if (age < 16) {
        console.log(belowSixteen);
    }
    else
    {
        console.log(aboveSixteen);
    }
    
}
checkAge();
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichPlane(x, y)
{
    if (x === 0)
    {
        console.log(`(${x},${y}) is on the y axis `);
    }
    if (y === 0) {
        console.log(`(${x},${y}) is on the x axis `);
    }
    if (x > 0)
    {
        if (y > 0)
        {
            console.log(`(${x},${y}) is in Quadrant 1 `);
        }
        else
        {
            console.log(`(${x},${y}) is in Quadrant 4 `);
        }

    }
    else //-x
    {
        if (y > 0)
        {
            console.log(`(${x},${y}) is in Quadrant 2 `);
        }
        else
        {
            console.log(`(${x},${y}) is in Quadrant 3 `);
        }
    }
}
whichPlane(-3, 4);
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function isTriangle(sideA, sideB, sideC)
{
    if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB) {
        console.log("Not a triangle");
    }
    else
    {
        if (sideA == sideB && sideB == sideC) {
            console.log("It's an equilateral triangle");
        }
        else if ((sideA == sideB && sideB != sideC) || (sideA != sideB && sideB == sideC) || (sideA != sideB && sideA == sideC)) {
            console.log("It's an isosceles triangle");
        }
        else
        {
            console.log("It's a scalene triangle.");
        }
    }
}
isTriangle(3, 3, 3);
// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataLeft(planLimit=100, day=15, usage=500)
{
    let amountOfDaysLeft = 30 - day;
    let averageDailyData = usage / day;
    let maxAverageDailyData = planLimit / 30;
    let averageUsageLeft = (planLimit-usage) / amountOfDaysLeft;
    if (usage > planLimit) {console.log("You've gone over your data usage. You will be charged an arm and a leg.") }
    else if (averageDailyData * 30 > planLimit) {
        console.log(`You are currently on ${day} of your 30 day data plan using ${averageDailyData} per day\n`);
        console.log(`You are currently exceeding your max average daily use of ${maxAverageDailyData} and have ${amountOfDaysLeft} days left in your plan\n`);
        console.log(`To stay within your plan, you can only use ${averageUsageLeft} GB per day`)

    }
    else
    {
        console.log(`You're doing ok.'`);
    }

}
dataLeft();