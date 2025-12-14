// MODULE - II: Objects and Classes

function renderJavaM2Q1() {
    return `
        ${header('Q1. Class and Object in Java', 'Create, Instantiate, Access Members (8 Marks)', 'code')}
        
        ${section('1. Definition of Class (The Blueprint)', `
            <p>A <strong>Class</strong> is a user-defined blueprint or template from which objects are created. It represents a set of properties (variables) and behaviors (methods) that are common to all objects of one type.</p>
            <p>It does not occupy memory until an object is created.</p>
            <p><strong>Syntax:</strong></p>
            ${codeBlock(`class ClassName {
    // Variables (State)
    // Methods (Behavior)
}`, 'java')}
        `)}
        
        ${section('2. Definition of Object (The Real Thing)', `
            <p>An <strong>Object</strong> is an instance of a class. It is a real-world entity that has a state and behavior. When an object is created, memory is allocated in the Heap.</p>
            <p><strong>Syntax to create:</strong> <code>ClassName objectName = new ClassName();</code></p>
        `)}
        
        ${section('3. Accessing Members', `
            <p>We use the <strong>dot operator (.)</strong> to access variables and methods of an object.</p>
            <ul>
                <li><code>objectName.variableName</code></li>
                <li><code>objectName.methodName()</code></li>
            </ul>
        `)}
        
        ${section('Example Program', `
            ${codeBlock(`// 1. Creating the Class
class Student {
    // Data Members (Variables)
    String name;
    int rollNo;

    // Member Function (Method)
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNo);
    }
}

public class Main {
    public static void main(String[] args) {
        // 2. Instantiating an Object (Creating object 's1')
        Student s1 = new Student();

        // 3. Accessing Members using dot operator
        s1.name = "Rahul";
        s1.rollNo = 101;

        // Calling the method
        s1.displayInfo(); 
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM2Q2() {
    return `
        ${header('Q2. Constructors in Java', 'Default, Parameterized, Copy (8 Marks)', 'code')}
        
        ${section('Definition', `
            <p>A <strong>Constructor</strong> is a special method used to initialize objects. It is called automatically when an object is created.</p>
            <p><strong>Rules for Constructors:</strong></p>
            <ul>
                <li>Must have the <strong>same name</strong> as the class.</li>
                <li>Must have <strong>no return type</strong> (not even void).</li>
                <li>It is called when you use the <code>new</code> keyword.</li>
            </ul>
        `)}
        
        ${section('Types of Constructors', `
            ${table(
        ['Type', 'Description', 'Example'],
        [
            ['1. Default Constructor', "A constructor with no arguments. If you don't write one, Java adds a hidden one automatically.", '<code>Student() { ... }</code>'],
            ['2. Parameterized Constructor', 'A constructor that accepts arguments to initialize variables with specific values.', '<code>Student(String n, int r) { ... }</code>'],
            ['3. Copy Constructor', 'A constructor that creates an object by copying values from another object.', '<code>Student(Student s) { ... }</code>']
        ]
    )}
        `)}
        
        ${section('Example Program', `
            ${codeBlock(`class Box {
    int length;

    // 1. Default Constructor
    Box() {
        length = 0;
        System.out.println("Default Constructor Called");
    }

    // 2. Parameterized Constructor
    Box(int l) {
        length = l;
        System.out.println("Parameterized Constructor Called");
    }

    // 3. Copy Constructor
    Box(Box oldBox) {
        length = oldBox.length;
        System.out.println("Copy Constructor Called");
    }

    void show() { System.out.println("Length: " + length); }
}

public class Test {
    public static void main(String[] args) {
        Box b1 = new Box();      // Calls Default
        Box b2 = new Box(10);    // Calls Parameterized
        Box b3 = new Box(b2);    // Calls Copy (Copies 10 from b2)
        
        b3.show(); // Output: Length: 10
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM2Q3() {
    return `
        ${header('Q3. String Class Methods', 'Commonly Used Methods (8 Marks)', 'code')}
        
        ${section('Definition', `
            <p>In Java, a <strong>String</strong> is an object that represents a sequence of characters. Strings in Java are <strong>Immutable</strong> (cannot be changed once created).</p>
        `)}
        
        ${section('Commonly Used Methods', `
            <ul>
                <li><strong>length():</strong> Returns the number of characters in the string.
                    <br><code>"Hello".length()</code> → returns 5.
                </li>
                <li><strong>charAt(int index):</strong> Returns the character at a specific position.
                    <br><code>"Java".charAt(0)</code> → returns 'J'.
                </li>
                <li><strong>substring(int beginIndex):</strong> Returns a part of the string starting from the index.
                    <br><code>"Welcome".substring(3)</code> → returns "come".
                </li>
                <li><strong>equals(String another):</strong> Checks if two strings have the exact same content (Case sensitive).
                    <br><code>"Hi".equals("hi")</code> → returns false.
                </li>
                <li><strong>indexOf(String str):</strong> Returns the index number where the text is first found.
                    <br><code>"Banana".indexOf("a")</code> → returns 1.
                </li>
                <li><strong>concat(String str):</strong> Joins two strings together.
                    <br><code>"Hi".concat(" World")</code> → returns "Hi World".
                </li>
            </ul>
        `)}
        
        ${section('Example Program', `
            ${codeBlock(`public class StringMethods {
    public static void main(String[] args) {
        String s1 = "Hello Java";
        
        System.out.println("Length: " + s1.length());       // 10
        System.out.println("Char at 1: " + s1.charAt(1));   // 'e'
        System.out.println("Substring: " + s1.substring(6));// "Java"
        System.out.println("Equals: " + s1.equals("HELLO"));// false
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM2Q4() {
    return `
        ${header('Q4. StringBuffer Class', 'Methods and Difference from String (8 Marks)', 'code')}
        
        ${section('Definition', `
            <p><strong>StringBuffer</strong> is a peer class of String that provides much of the functionality of strings. The main difference is that StringBuffer is <strong>Mutable</strong> (modifiable). You can change the text without creating a new object.</p>
        `)}
        
        ${section('Common Methods', `
            <ul>
                <li><strong>append(String s):</strong> Adds text to the end.</li>
                <li><strong>insert(int offset, String s):</strong> Adds text at a specific position.</li>
                <li><strong>reverse():</strong> Reverses the characters in the buffer.</li>
                <li><strong>capacity():</strong> Returns the current storage capacity (default is 16 + string length).</li>
            </ul>
        `)}
        
        ${section('Example Program', `
            ${codeBlock(`public class BufferTest {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello");

        sb.append(" World");    // Now sb is "Hello World"
        System.out.println(sb);

        sb.insert(5, " Java");  // Now sb is "Hello Java World"
        System.out.println(sb);

        sb.reverse();           // Reverses entire string
        System.out.println(sb);
    }
}`, 'java')}
        `)}
        
        ${section('Difference between String and StringBuffer', `
            ${table(
        ['Feature', 'String', 'StringBuffer'],
        [
            ['Mutability', 'Immutable (Cannot be changed).', 'Mutable (Can be changed).'],
            ['Memory', 'Uses String Constant Pool.', 'Uses Heap memory.'],
            ['Performance', 'Slower (creates new objects for every change).', 'Faster (modifies the same object).'],
            ['Usage', "Use when data doesn't change often.", 'Use when data changes frequently.']
        ]
    )}
        `)}
    `;
}

function renderJavaM2Q5() {
    return `
        ${header('Q5. Access Specifiers', 'public, private, protected, default (8 Marks)', 'theory')}
        
        ${section('Justification', `
            <p>Access specifiers are used to implement <strong>Encapsulation (Data Hiding)</strong>. They control which parts of a program can access the members (variables/methods) of a class. This ensures security and prevents misuse of data.</p>
        `)}
        
        ${section('The 4 Access Specifiers', `
            <ul>
                <li><strong>Private:</strong>
                    <br>Scope: Accessible ONLY within the same class.
                    <br>Use: For sensitive data like passwords or internal logic.
                </li>
                <li><strong>Default (No keyword):</strong>
                    <br>Scope: Accessible within the same class and same package.
                    <br>Use: If you don't type anything, this is the default.
                </li>
                <li><strong>Protected:</strong>
                    <br>Scope: Accessible within same package + subclasses (child classes) in other packages.
                    <br>Use: Important for Inheritance.
                </li>
                <li><strong>Public:</strong>
                    <br>Scope: Accessible everywhere (Global).
                    <br>Use: For methods that need to be called from outside.
                </li>
            </ul>
        `)}
        
        ${section('Comparison Table', `
            ${table(
        ['Modifier', 'Same Class', 'Same Package', 'Subclass (Diff Pkg)', 'World (Diff Pkg)'],
        [
            ['private', 'Yes', 'No', 'No', 'No'],
            ['default', 'Yes', 'Yes', 'No', 'No'],
            ['protected', 'Yes', 'Yes', 'Yes', 'No'],
            ['public', 'Yes', 'Yes', 'Yes', 'Yes']
        ]
    )}
        `)}
    `;
}

function renderJavaM2Q6() {
    return `
        ${header('Q6. Static Keyword', 'Variables, Methods, Blocks (8 Marks)', 'code')}
        
        ${section('Definition', `
            <p>The <strong>static</strong> keyword in Java means that a member belongs to the <strong>Class</strong> rather than a specific Object. You can access static members without creating an object.</p>
        `)}
        
        ${section('1. Static Variable (Class Variable)', `
            <ul>
                <li>Memory is allocated only once when the class loads.</li>
                <li>The value is shared by all objects.</li>
                <li>Example: <code>static String collegeName = "IIT";</code></li>
            </ul>
        `)}
        
        ${section('2. Static Method', `
            <ul>
                <li>Can be called without an object.</li>
                <li><strong>Restriction:</strong> Can only access other static data. Cannot use <code>this</code> or <code>super</code>.</li>
                <li>Example: <code>public static void show() { ... }</code></li>
            </ul>
        `)}
        
        ${section('3. Static Block', `
            <ul>
                <li>A block of code that runs only once when the class is loaded into memory (even before the main method).</li>
                <li>Used to initialize static variables.</li>
            </ul>
        `)}
        
        ${section('Example Program', `
            ${codeBlock(`class Student {
    int rollNo; // Instance variable
    static String college = "ABC College"; // Static variable (Shared)

    // Static Method
    static void changeCollege() {
        college = "XYZ University";
    }
}

public class StaticDemo {
    public static void main(String[] args) {
        // Calling static method without object
        Student.changeCollege(); 

        System.out.println(Student.college); // Output: XYZ University
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM2Q7() {
    return `
        ${header("Q7. 'this' Keyword", 'Utility and Usage (6 Marks)', 'code')}
        
        ${section('Definition', `
            <p>The <strong>this</strong> keyword is a reference variable that refers to the <strong>current object</strong> (the object that is currently calling the method).</p>
        `)}
        
        ${section('Uses (Utility)', `
            <ol>
                <li><strong>To refer to Instance Variables:</strong>
                    <br>It solves the confusion when a local variable (parameter) has the same name as an instance variable (shadowing).
                    <br>Example: <code>this.name = name;</code>
                </li>
                <li><strong>To invoke Current Class Constructor (Constructor Chaining):</strong>
                    <br><code>this()</code> is used to call another constructor within the same class to reuse code.
                </li>
                <li><strong>To pass the current object as a parameter:</strong>
                    <br><code>method(this);</code>
                </li>
            </ol>
        `)}
        
        ${section('Simple Example', `
            ${codeBlock(`class Demo {
    int x; // Instance variable

    Demo(int x) { // x here is local variable
        this.x = x; // Assigns local 'x' to instance 'x'
    }
    
    void show() {
        System.out.println("Value of x: " + this.x);
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM2Q8() {
    return `
        ${header('Q8. Character Class Methods', '(4 Marks)', 'theory')}
        
        ${section('Answer', `
            <p>The <strong>Character</strong> class wraps a value of the primitive type char in an object.</p>
            
            <p><strong>Common Methods:</strong></p>
            <ul>
                <li><strong>isLetter(char ch):</strong> Returns true if the character is a letter (A-Z or a-z).</li>
                <li><strong>isDigit(char ch):</strong> Returns true if the character is a number (0-9).</li>
                <li><strong>isWhitespace(char ch):</strong> Returns true if the character is a space, tab, or newline.</li>
                <li><strong>toUpperCase(char ch):</strong> Converts the character to Capital letter.</li>
                <li><strong>toLowerCase(char ch):</strong> Converts the character to Small letter.</li>
            </ul>
            
            <p><strong>Example:</strong> <code>Character.isDigit('5')</code> returns <code>true</code>.</p>
        `)}
    `;
}

function renderJavaM2Q9() {
    return `
        ${header('Q9. Garbage Collection', 'finalize() Method (6 Marks)', 'theory')}
        
        ${section('Definition', `
            <p><strong>Garbage Collection (GC)</strong> is the process of automatically reclaiming the runtime memory by destroying objects that are no longer in use (objects that have no reference).</p>
            <ul>
                <li>It makes Java memory-efficient.</li>
                <li>It is done by the JVM (Garbage Collector).</li>
                <li>We can request GC using <code>System.gc()</code>, but we cannot force it.</li>
            </ul>
        `)}
        
        ${section('Purpose of finalize() Method', `
            <ul>
                <li>The <code>finalize()</code> method is protected and defined in the Object class.</li>
                <li>It is called by the Garbage Collector just before an object is destroyed.</li>
                <li><strong>Purpose:</strong> To perform "cleanup" activities, like closing files or database connections, before the object dies.</li>
            </ul>
            
            <p><strong>Syntax:</strong></p>
            ${codeBlock(`protected void finalize() {
    System.out.println("Object is being destroyed");
}`, 'java')}
        `)}
    `;
}
