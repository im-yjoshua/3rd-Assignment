import * as readline from 'readline';

{

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });

    
    console.log("3rd Assignment\n")


    {
        console.log("Write a program that calculates the percentage.\n")

        var num1: number = 10;
        var num2: number = 20;
        var num3: number = 30;
        var num4: number = 40;
        var num5: number = 50;
        var sumation: number = num1 + num2 + num3 + num4 + num5;
        var tatalNumbers:number =  5;
        var percentage: number = (sumation / tatalNumbers);

        console.log(`The calculated percentage for the sum of {${num1}, ${num2}, ${num3}, ${num4}, ${num5}} is: ${percentage}%\n`)

    }

    // // ===========================================================================================

    {
        console.log("Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% dicsount; otherwise, apply a 5% discount.\n")

        var ProductPrice: number = 80; // in dollars and can vary
        var ProductPrice2: number = 120; // in dollars and can vary

        // Calculating 5% discount for the product that is less than $100.
        if (ProductPrice <= 100) {
            var newProductPrice: number = (ProductPrice * 5) / 100;     // calculating 5% discount for the product.
            var dicsountedPrice: number = ProductPrice - newProductPrice; 

            console.log(`Total price was $${ProductPrice}. A discount of 5% is applied. Your total is: $${dicsountedPrice}`)

        }

        // Calculating 10% discount for the product that is greater than $100.
        if (ProductPrice2 > 100) {
            var newProductPrice: number = (ProductPrice2 * 10) / 100;     // calculating 10% discount for the product.
            var dicsountedPrice: number = ProductPrice2 - newProductPrice; 

            console.log(`Total price was $${ProductPrice2}. A discount of 10% is applied. Your total is: $${dicsountedPrice}`)

        }

        else {
            console.log('Sorry, please buy an eligible products, thanks!')
        }
    }

    // // ===========================================================================================

    {
        console.log("Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print 'child'. If it's between 13 and 19, print 'teenager'. Otherwise, print 'adult'\n")

        // The age group of a person will be calculated according to the following chart according to the question.
           
          // Asking the user for input
          rl.question('Enter your age: ', (userInput) => {
            var ageinput = userInput
            rl.close();

            if (Number(ageinput) > 0 && Number(ageinput) <= 12) {
                console.log(`The age of this person is ${ageinput} so he/she is a child.`)
            }
            
            if (Number(ageinput) > 12 && Number(ageinput) <= 19) {
                console.log(`The age of this person is ${ageinput} so he/she is a teenager.`)
            }
            
            if (Number(ageinput) > 19 && Number(ageinput) <= 100) {
                console.log(`The age of this person is ${ageinput} so he/she is an adult.`)
            }
            
        });
    }

    // // ===========================================================================================

    {
        console.log("Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.\n")

        // All temperatures are in Celsius. The ouput of the program will be calculated according to the following chart:
        // (0 ℃)  or 32 ℉   ==> *Extremely Cold*
        // (1 ℃)  or 33.8 ℉ , to (10 ℃)  or 50 ℉   ==>  *Cold*
        // (11 ℃)  or 51.8 ℉, to (20 ℃)  or 68 ℉   ==>  *Cold to Mild*
        // (21 ℃)  or 69.8 ℉ , to (30 ℃)  or 86 ℉   ==> *Warm*
        // (31 or above ℃)  or 87.8 ℉  ==> *Hot*

        // var TemperatureGroup: number = 0;


        // Asking the user for input.
        rl.question('Enter temperature (in Celsius): ', (userInput) => {
            var UserInput: any = userInput
            rl.close();
            
            if (Number(UserInput) === 0){
                console.log("The temperature is 'Extremely Cold', so you should wear:\n*Heavy winter coat.\n*Insulated gloves.\n*Hat, Scarf, Thermal layers.\n*Insulated and waterproof boots.")
            }
            if (Number(UserInput) > 0 && UserInput <= 10){
                console.log("The temperature is 'Cold', so you should wear:\n*Winter coat or heavy jacket.\n*Layers underneath.\n*Gloves, Hat, Scarf.\n*Boots or sturdy shoes.")
            }
            if (Number(UserInput) > 10 && UserInput <= 20){
                console.log("The temperature is 'Cool to Mild', so you should wear:\n*Medium-weight jacket or sweater.\n*Long sleeves or layers.\n*Comfortable jeans or pants.\n*Closed-toe shoes or sneakers.")
            }
            if (Number(UserInput) > 20 && UserInput <= 30){
                console.log("The temperature is 'Warm', so you should wear:\n*Lighter clothing i.e. t-shirts, shorts, skirts.\n*Sunglasses, hat, sunscreen.\n*Comfortable walking shoes.")
            }
            if (Number(UserInput) > 30 && UserInput <= 60){
                console.log("The temperature is 'Hot', so you should wear:\n*Lightweight and breathable clothing i.e. - shorts, tank tops, summer dresses.\n*Sunglasses, sunscreen, wide-brimmed hat\n*.Sandals or breathable shoes")
            }
            else{
                console.log("Please enter a logical temperature!")
            }
        });

    }

    // // ===========================================================================================
    
    {
        console.log("Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone show output accordingly.\n")
        // Asking the user to enter any number
        rl.question('Enter any number: ', (userInput) => {
            var anyNumber: any = userInput;
            rl.close();

            if (Number(anyNumber) % 3 === 0 && Number(anyNumber) % 5 === 0){
                console.log(`${anyNumber} is divisible on both 3, and 5`)
            }
            else if (Number(anyNumber) % 3 === 0){
                console.log(`${anyNumber} is divisible on 3 only.`)
            }
            else if (Number(anyNumber) %5 === 0){
                console.log(`${anyNumber} is divisible on 5 only.`)
            }
            else{
                console.log(`${anyNumber} is neither divisible by 3, nor by 5.`)
            }
        });
    }

    // // ===========================================================================================

    {
        console.log("Write a program that checks if the given year is leap year or not.\n")

        // Asking the user to enter any year
        rl.question('Enter any year: ', (userInput) => {
            var anyyear: any = userInput;
            rl.close();
            
            function isLeapYear(year: number): boolean{
                if (year % 4 !== 0){
                    return false;
                } 
                else if (Number(year) % 100 !== 0) {
                    return true;
                } 
                else if (Number(year) % 400 !== 0) {
                    return false;
                } 
                else{
                    return true;
                }
            }

            if (isLeapYear(Number(anyyear))) {
                console.log(`${anyyear} is a leap year!`)
            }
            else {
                console.log(`${anyyear} is not a leap year!`)
            }

        });
    }

    // // ===========================================================================================

    {
        console.log("Develop a program that determines the day of the week. Ask the user for a number (1-7) and uses nested if statements to print the corresponding day's name.\n")

        rl.question('Enter any number between (1-7): ', userInput => {
            var anyNumber: any = userInput;

            if (Number(anyNumber) < 1 || Number(anyNumber) > 7) {
                    console.log(`Invalid Input! Please enter correct number!`)
            } else{
                let dayName: string;
                
                if (Number(anyNumber) === 1) {
                    dayName = 'Monday';
                    console.log(`The corresponding day is ${dayName}.`);
                } else if (Number(anyNumber) === 2) {
                   dayName = 'Tuesday';
                   console.log(`The corresponding day is ${dayName}.`);
                } else if (Number(anyNumber) === 3) {
                    dayName = 'Wednesday;'
                    console.log(`The corresponding day is ${dayName}.`);
                } else if (Number(anyNumber) === 4) {
                    dayName = 'Thursday';
                    console.log(`The corresponding day is ${dayName}.`);
                } else if (Number(anyNumber) === 5) {
                    dayName = 'Friday';
                    console.log(`The corresponding day is ${dayName}.`);
                } else if (Number(anyNumber) === 6) {
                    dayName = 'Saturday';
                    console.log(`The corresponding day is ${dayName}.`);
                } else if (Number(anyNumber) === 7) {
                    dayName = 'Sunday';
                    console.log(`The corresponding day is ${dayName}.`);
                } else {
                    console.log("Something went wrong. Please try again!")
                }              
            }
            rl.close();
        });
    }

    // // ===========================================================================================

    {
        console.log("Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax and so on up to if greater than 500 then add 25% of tax. Where the tax amount will be calculated by the amount of bill.")

        rl.question("Enter number of units used: ", (userInput) => {
        var unitAmount: any = userInput;    
        rl.close();
        
        var initialPricePerUnit: number = 2; // Letting {initial price per unit without any tax} In dolllars
                
        if (unitAmount <= 100) { // 0 tax here, as per guideline in the question.
            var Bill: number = (unitAmount * initialPricePerUnit);
            var calculatingTax: number = Bill;  // Calculating 10% additional tax for (100 - 199) units.
            var actualBill: number = Bill;
            console.log(`Total Units used are ${unitAmount} units\nInitial Cost per Unit is: $${initialPricePerUnit}\nYour initial bill is: $${Bill}\nTotal tax of 0% is added that is: $0\nYour total bill is: $${actualBill}`)
        } else if (unitAmount > 100 && unitAmount < 200) {
            var Bill: number = (unitAmount * initialPricePerUnit);
            var calculatingTax: number = Bill * 10 / 100;  // Calculating 10% additional tax for (100 - 199) units.
            var actualBill: number = Bill + calculatingTax;
            console.log(`Total Units used are ${unitAmount} units\nInitial Cost per Unit is: $${initialPricePerUnit}\nYour initial bill is: $${Bill}\nTotal tax of 10% is added that is: $${calculatingTax}\nYour total bill is: $${actualBill}`)
        } else if (unitAmount > 200 && unitAmount < 500) {
            var Bill: number = (unitAmount * initialPricePerUnit);
            var calculatingTax: number = Bill * 15 / 100;  // Calculating 15% additional tax for (200 - 499) units.
            var actualBill: number = Bill + calculatingTax;
            console.log(`Total Units used are ${unitAmount} units\nInitial Cost per Unit is: $${initialPricePerUnit}\nYour initial bill is: $${Bill}\nTotal tax of 15% is added that is: $${calculatingTax}\nYour total bill is: $${actualBill}`)
        } else if (unitAmount > 500) {
            var Bill: number = (unitAmount * initialPricePerUnit);
            var calculatingTax: number = Bill * 25 / 100;  // Calculating 25% additional tax for (greater than 500) units.
            var actualBill: number = Bill + calculatingTax;
            console.log(`Total Units used are ${unitAmount} units\nInitial Cost per Unit is: $${initialPricePerUnit}\nYour initial bill is: $${Bill}\nTotal tax of 25% is added that is: $${calculatingTax}\nYour total bill is: $${actualBill}`)
        }
        
        
    });

    }
    
    // // ===========================================================================================

    {
        console.log("write a program that tells if the student is pass or fail based on the attendance greater than 75%, practical marks should be greater than 50% and theory marks should be greater than 45% for passing in a semester.")
        

        
        rl.question("Enter your attendence percentage: ", (input) => {
            var attendancePercentage = parseInt(input);
            rl.question("Enter practical marks percentage: ", (input) => {
                var practicalPercentage = parseInt(input)
                rl.question("Enter Theory marks percentage: ", (input) => {
                    var theoryPercentage = parseInt(input)
                        
            
                    // Passing criteria in percentage:
                    var attendence: number = 75;
                    var practical: number = 50;
                    var theory: number = 45;
                    
                    if (attendancePercentage >= attendence && practicalPercentage >= practical && theoryPercentage >= theory) {
                        console.log(`Congrats, you have passed this semester🙌🎉`)
                    } else {
                        console.log("Unfortunately, you couldn't make it. Better luck next time!✨🙌")
                    }
                    
                    rl.close();
                    });
                });
            });
    }

    // // ===========================================================================================

    console.log("Write a ts program that evaluates the grades of the students: *mentioned in the question*")

    // 80% or greater === grade A
    // 70% or greater === grade B
    // 60% or greater === grade C
    // 50% or greater === grade D
    // Less than  50% === grade F

    rl.question("Enter your grades: ", (input) => {
        var grades = parseInt(input);

        if (grades >= 80 && grades <= 100) {
            console.log(`Congrats, you got A grade in this semester!`)
        } else if (grades >= 70 && grades < 80) {
            console.log(`You got B grade in this semester! Better luck next time`)
        } else if (grades >= 60 && grades < 70) {
            console.log(`You got C grade in this semester! You can do much better!!`)
        } else if (grades >= 50 && grades < 60) {
            console.log(`You got D grade in this semester! It's okay, better luck next time.`)
        } else if (grades < 50 && grades >= 0) {
            console.log(`You got F grade in this semester! Don't worry, keep it up!!`)
        } else {
            console.log(`Invalid Input. Please enter a number between 1 - 100`)
        }
        rl.close();
    });


}