// MODULE - I: Introduction to Java (Detailed Answers)

function renderJavaM1Q1() {
    return `
        ${header('Q1. Data Types in Java', 'Primitive and Non-Primitive (10 Marks)', 'code')}
        
        ${section('Answer', `
            <p><strong>Definition:</strong> Data types specify the size and type of values that can be stored in a variable. In Java, data types are divided into two main categories:</p>
            
            <h4>1. Primitive Data Types</h4>
            <p>These are the basic types provided by Java naturally. They store simple values. There are 8 primitive types:</p>
            
            ${table(
        ['Category', 'Data Type', 'Size', 'What it stores', 'Example'],
        [
            ['Integer', 'byte', '1 byte', 'Very small numbers', '<code>byte b = 10;</code>'],
            ['Integer', 'short', '2 bytes', 'Small numbers', '<code>short s = 100;</code>'],
            ['Integer', 'int', '4 bytes', 'Standard numbers (Most used)', '<code>int a = 5000;</code>'],
            ['Integer', 'long', '8 bytes', 'Very large numbers', '<code>long l = 100000L;</code>'],
            ['Float', 'float', '4 bytes', 'Numbers with decimals (6-7 digits)', '<code>float f = 10.5f;</code>'],
            ['Float', 'double', '8 bytes', 'Large decimals (15 decimals)', '<code>double d = 20.99;</code>'],
            ['Character', 'char', '2 bytes', 'Single character/letter', "<code>char c = 'A';</code>"],
            ['Boolean', 'boolean', '1 bit', 'True or False only', '<code>boolean isJavaFun = true;</code>']
        ]
    )}
            
            <h4>2. Non-Primitive (Reference) Data Types</h4>
            <p>These are complex types created by programmers. They do not store the value directly but store the address (reference) of the value.</p>
            <ul>
                <li><strong>String:</strong> A sequence of characters. (e.g., "Hello World").</li>
                <li><strong>Arrays:</strong> A collection of similar data types.</li>
                <li><strong>Classes:</strong> A blueprint to create objects.</li>
                <li><strong>Interfaces:</strong> A collection of abstract methods.</li>
            </ul>
        `)}
        
        ${section('Example Program', `
            ${codeBlock(`public class DataTypesExample {
    public static void main(String[] args) {
        // Primitive
        int age = 21;
        double price = 99.50;
        char grade = 'A';
        boolean isPassed = true;

        // Non-Primitive
        String name = "Student";
        int[] marks = {90, 85, 88};

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM1Q2() {
    return `
        ${header('Q2. Operators in Java', 'Arithmetic, Relational, Logical, Bitwise (10 Marks)', 'code')}
        
        ${section('Answer', `
            <p>Operators are special symbols used to perform operations on variables and values.</p>
            
            <h4>1. Arithmetic Operators</h4>
            <p>Used to perform basic mathematical operations.</p>
            <ul>
                <li><code>+</code> (Addition): Adds two numbers.</li>
                <li><code>-</code> (Subtraction): Subtracts right operand from left.</li>
                <li><code>*</code> (Multiplication): Multiplies two numbers.</li>
                <li><code>/</code> (Division): Divides and gives the quotient.</li>
                <li><code>%</code> (Modulus): Divides and gives the remainder.</li>
            </ul>
            <p><strong>Example:</strong></p>
            ${codeBlock(`int a = 10, b = 3;
System.out.println(a + b); // Output: 13
System.out.println(a % b); // Output: 1 (Remainder)`, 'java')}
            
            <h4>2. Relational Operators</h4>
            <p>Used to compare two values. They always return a boolean (true or false).</p>
            <ul>
                <li><code>==</code> (Equal to)</li>
                <li><code>!=</code> (Not equal to)</li>
                <li><code>&gt;</code> (Greater than)</li>
                <li><code>&lt;</code> (Less than)</li>
                <li><code>&gt;=</code> (Greater than or equal to)</li>
                <li><code>&lt;=</code> (Less than or equal to)</li>
            </ul>
            <p><strong>Example:</strong></p>
            ${codeBlock(`int x = 10, y = 20;
System.out.println(x > y); // Output: false`, 'java')}
            
            <h4>3. Logical Operators</h4>
            <p>Used to combine multiple conditions.</p>
            <ul>
                <li><code>&amp;&amp;</code> (Logical AND): Returns true only if both sides are true.</li>
                <li><code>||</code> (Logical OR): Returns true if at least one side is true.</li>
                <li><code>!</code> (Logical NOT): Reverses the result (True becomes False).</li>
            </ul>
            <p><strong>Example:</strong></p>
            ${codeBlock(`boolean a = true, b = false;
System.out.println(a && b); // Output: false
System.out.println(a || b); // Output: true`, 'java')}
            
            <h4>4. Bitwise Operators</h4>
            <p>Used to perform operations on individual bits (0s and 1s).</p>
            <ul>
                <li><code>&amp;</code> (Bitwise AND)</li>
                <li><code>|</code> (Bitwise OR)</li>
                <li><code>^</code> (Bitwise XOR)</li>
                <li><code>&lt;&lt;</code> (Left Shift)</li>
                <li><code>&gt;&gt;</code> (Right Shift)</li>
            </ul>
        `)}
    `;
}

function renderJavaM1Q3() {
    return `
        ${header('Q3. Control Statements', 'Looping and Selection (10 Marks)', 'code')}
        
        ${section('Answer', `
            <p>Control statements determine the flow of execution in a program.</p>
            
            <h4>A. Selection Statements (Decision Making)</h4>
            <p>These allow the program to choose different paths based on conditions.</p>
            
            <h5>1. if-else Statement</h5>
            <p>Checks a condition. If true, it runs the if block; otherwise, it runs the else block.</p>
            <p><strong>Syntax:</strong></p>
            ${codeBlock(`if (condition) {
    // code if true
} else {
    // code if false
}`, 'java')}
            
            <h5>2. Switch Statement</h5>
            <p>Used when checking one variable against many options (cases). It is cleaner than many if-else statements.</p>
            <p><strong>Syntax:</strong></p>
            ${codeBlock(`switch(variable) {
    case value1:
        // code
        break; // Stop here
    default:
        // code if no case matches
}`, 'java')}
        `)}
        
        ${section('B. Looping Statements (Iteration)', `
            <p>These allow running a block of code multiple times.</p>
            
            <h5>1. While Loop (Entry Controlled)</h5>
            <p>It checks the condition first. If true, the loop runs. If false initially, it never runs.</p>
            <p><strong>Syntax:</strong></p>
            ${codeBlock(`while(condition) {
    // code
}`, 'java')}
            
            <h5>2. Do-While Loop (Exit Controlled)</h5>
            <p>It runs the code first, then checks the condition. Guaranteed to run at least once.</p>
            <p><strong>Syntax:</strong></p>
            ${codeBlock(`do {
    // code
} while(condition);`, 'java')}
            
            <h5>3. For Loop</h5>
            <p>Best used when you know the exact number of times you want to loop.</p>
            <p><strong>Syntax:</strong> <code>for(initialization; condition; update) { ... }</code></p>
            <p><strong>Example:</strong></p>
            ${codeBlock(`for(int i=1; i<=5; i++) {
    System.out.println("Count: " + i);
}`, 'java')}
        `)}
    `;
}

function renderJavaM1Q4() {
    return `
        ${header('Q4. Method Overloading', 'vs Method Overriding (8 Marks)', 'code')}
        
        ${section('Answer', `
            <p><strong>Method Overloading (Compile-time Polymorphism):</strong> Method overloading allows a class to have more than one method with the same name, provided their parameter lists are different.</p>
            <ul>
                <li>Difference can be in the number of parameters.</li>
                <li>Difference can be in the type of parameters.</li>
            </ul>
        `)}
        
        ${section('Example Program', `
            ${codeBlock(`class Calculator {
    // Method 1: Adds two integers
    void add(int a, int b) {
        System.out.println("Sum of 2 ints: " + (a + b));
    }

    // Method 2: Adds three integers (Different number of args)
    void add(int a, int b, int c) {
        System.out.println("Sum of 3 ints: " + (a + b + c));
    }

    // Method 3: Adds two doubles (Different type of args)
    void add(double a, double b) {
        System.out.println("Sum of doubles: " + (a + b));
    }
}

public class Test {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        calc.add(10, 20);
        calc.add(10, 20, 30);
        calc.add(5.5, 2.2);
    }
}`, 'java')}
        `)}
        
        ${section('Difference between Overloading and Overriding', `
            ${table(
        ['Feature', 'Method Overloading', 'Method Overriding'],
        [
            ['Where?', 'Happens in the same class.', 'Happens in Parent and Child classes.'],
            ['Method Name', 'Same.', 'Same.'],
            ['Parameters', 'Must be different.', 'Must be exactly same.'],
            ['Purpose', 'Increases code readability.', 'Changes/Updates parent behavior.'],
            ['Polymorphism', 'Compile-time (Static).', 'Run-time (Dynamic).']
        ]
    )}
        `)}
    `;
}

function renderJavaM1Q5() {
    return `
        ${header('Q5. Arrays in Java', 'Single vs Multi-dimensional (8 Marks)', 'code')}
        
        ${section('Answer', `
            <p><strong>Definition:</strong> An Array is an object that holds a fixed number of values of a single type. The length of an array is established when the array is created.</p>
            
            <h4>1. Single-Dimensional Array</h4>
            <p>This is a simple list of elements.</p>
            <ul>
                <li><strong>Syntax:</strong> <code>dataType[] arrayName;</code></li>
                <li><strong>Instantiation:</strong> <code>arrayName = new dataType[size];</code></li>
            </ul>
            <p><strong>Example:</strong></p>
            ${codeBlock(`int[] numbers = {10, 20, 30, 40};
System.out.println(numbers[0]); // Output: 10`, 'java')}
            
            <h4>2. Multi-Dimensional Array</h4>
            <p>This is an "array of arrays." The most common is the 2D array, which looks like a table (rows and columns).</p>
            <ul>
                <li><strong>Syntax:</strong> <code>dataType[][] arrayName;</code></li>
            </ul>
        `)}
        
        ${section('Example Program', `
            ${codeBlock(`public class MatrixExample {
    public static void main(String[] args) {
        // A 2x2 matrix
        int[][] matrix = {
            {1, 2},
            {3, 4}
        };

        // Printing the matrix
        for(int i=0; i<2; i++) {
            for(int j=0; j<2; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println(); // New line
        }
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM1Q6() {
    return `
        ${header('Q6. Features of Java', 'Platform Independent & Robust (6 Marks)', 'theory')}
        
        ${section('Features of Java', `
            <ol>
                <li><strong>Simple:</strong> Easy to learn, no pointers.</li>
                <li><strong>Object-Oriented:</strong> Everything is an Object.</li>
                <li><strong>Secure:</strong> No direct access to memory, virus-free systems.</li>
                <li><strong>Multithreaded:</strong> Can do many tasks at once.</li>
            </ol>
        `)}
        
        ${section('Why Platform Independent?', `
            <p><strong>Write Once, Run Anywhere (WORA):</strong> When you compile Java code, it turns into Bytecode (.class file), not machine code.</p>
            <ul>
                <li>This Bytecode can run on any OS (Windows, Mac, Linux) that has a JVM installed.</li>
                <li>The hardware doesn't matter, only the JVM matters.</li>
            </ul>
        `)}
        
        ${section('Why Robust?', `
            <p><strong>Robust means Strong.</strong></p>
            <ul>
                <li><strong>Memory Management:</strong> Java has automatic Garbage Collection (deletes unused memory).</li>
                <li><strong>Exception Handling:</strong> Java catches errors properly so the system doesn't crash unexpectedly.</li>
                <li><strong>Type Checking:</strong> Java is strict about data types, preventing confusion.</li>
            </ul>
        `)}
    `;
}

function renderJavaM1Q7() {
    return `
        ${header('Q7. JDK, JRE, JVM', 'JVM Architecture (8 Marks)', 'theory')}
        
        ${section('Definitions', `
            <ol>
                <li><strong>JVM (Java Virtual Machine):</strong> The engine that actually runs the code. It is abstract (software-based). It converts Bytecode into machine code.</li>
                <li><strong>JRE (Java Runtime Environment):</strong> Implementation of JVM + Library Classes. It is what you need to run programs. (JVM + Libraries).</li>
                <li><strong>JDK (Java Development Kit):</strong> The full kit for developers. It includes JRE + Development Tools (Compiler, Debugger). (JRE + Tools).</li>
            </ol>
        `)}
        
        ${section('JVM Internal Architecture', `
            <p>The JVM performs three main tasks: Loads code, Verifies code, Executes code.</p>
            <ol>
                <li><strong>Class Loader Subsystem:</strong> Reads the .class file and saves it in memory.</li>
                <li><strong>Runtime Data Areas (Memory):</strong>
                    <ul>
                        <li><strong>Method Area:</strong> Stores class structures.</li>
                        <li><strong>Heap:</strong> Stores Objects.</li>
                        <li><strong>Stack:</strong> Stores local variables and method calls.</li>
                        <li><strong>PC Register:</strong> Keeps track of the current instruction.</li>
                        <li><strong>Native Method Stack:</strong> For non-Java code (C/C++).</li>
                    </ul>
                </li>
                <li><strong>Execution Engine:</strong>
                    <ul>
                        <li><strong>Interpreter:</strong> Reads bytecode line by line (slower).</li>
                        <li><strong>JIT Compiler (Just-In-Time):</strong> Compiles repeated code blocks at once to make it faster.</li>
                    </ul>
                </li>
                <li><strong>Java Native Interface (JNI):</strong> Interacts with Native Libraries (C/C++).</li>
            </ol>
        `)}
    `;
}

function renderJavaM1Q8() {
    return `
        ${header('Q8. Structure of a Java Program', '(6 Marks)', 'theory')}
        
        ${section('Answer', `
            <p>A Java program follows a strict structure:</p>
            <ol>
                <li><strong>Documentation Section:</strong> Optional comments (<code>//</code> or <code>/* */</code>) explaining the code.</li>
                <li><strong>Package Statement:</strong> The first line (optional), grouping the class (<code>package mypack;</code>).</li>
                <li><strong>Import Statements:</strong> Importing libraries (<code>import java.util.*;</code>).</li>
                <li><strong>Class Definition:</strong> The main body (<code>public class MyClass { ... }</code>).</li>
                <li><strong>Main Method:</strong> The entry point.
                    <ul>
                        <li><code>public</code>: Accessible by JVM from anywhere.</li>
                        <li><code>static</code>: Can run without creating an object of the class.</li>
                        <li><code>void</code>: Does not return any value.</li>
                        <li><code>main</code>: The name looked for by JVM.</li>
                        <li><code>String[] args</code>: Accepts command line arguments.</li>
                    </ul>
                </li>
            </ol>
        `)}
    `;
}

function renderJavaM1Q9() {
    return `
        ${header('Q9. Short Notes', '(6 Marks)', 'theory')}
        
        ${section('1. Command Line Arguments', `
            <ul>
                <li>These are values passed to the program at the time of running it.</li>
                <li>They are stored in the <code>String[] args</code> array in the main method.</li>
                <li>Example: <code>java MyProgram 10 20</code> → args[0] is "10".</li>
            </ul>
        `)}
        
        ${section('2. Type Casting', `
            <ul>
                <li><strong>Implicit (Widening):</strong> Converting small type to big type. Happens automatically.
                    <br><code>int x = 10; double y = x;</code> (Safe).
                </li>
                <li><strong>Explicit (Narrowing):</strong> Converting big type to small type. Must be done manually.
                    <br><code>double x = 10.5; int y = (int)x;</code> (You lose the .5).
                </li>
            </ul>
        `)}
        
        ${section('3. Scanner Class', `
            <p>Found in <code>java.util</code> package. Used to get input from the keyboard.</p>
            <p><strong>Common Methods:</strong></p>
            <ul>
                <li><code>nextInt()</code>: Reads an integer.</li>
                <li><code>nextLine()</code>: Reads a String.</li>
                <li><code>nextDouble()</code>: Reads a double.</li>
            </ul>
            <p><strong>Example:</strong></p>
            ${codeBlock(`Scanner sc = new Scanner(System.in);
int num = sc.nextInt();`, 'java')}
        `)}
    `;
}
