// MODULE - III: Inheritance and Polymorphism

function renderJavaM3Q1() {
    return `
        ${header('Q1. Inheritance and its Types', 'Single, Multilevel, Hierarchical (10 Marks)', 'code')}
        
        ${section('Definition', `
            <p><strong>Inheritance</strong> is a mechanism in Java where one object acquires all the properties (variables) and behaviors (methods) of a parent object. It represents an "IS-A" relationship (e.g., A Dog IS-A Animal).</p>
            <ul>
                <li><strong>Code Reusability:</strong> You can reuse fields and methods of the existing class.</li>
                <li><strong>Keywords:</strong> <code>extends</code> is used to inherit.</li>
            </ul>
        `)}
        
        ${section('Types of Inheritance', `
            <ul>
                <li><strong>Single Inheritance:</strong>
                    <br>One child class inherits from one parent class.
                    <br>Structure: Class A (Parent) → Class B (Child).
                </li>
                <li><strong>Multilevel Inheritance:</strong>
                    <br>There is a chain of inheritance. A child class becomes a parent for another class.
                    <br>Structure: Class A → Class B → Class C.
                </li>
                <li><strong>Hierarchical Inheritance:</strong>
                    <br>Multiple child classes inherit from a single parent class.
                    <br>Structure: Class A → Class B and Class A → Class C.
                </li>
                <li><strong>Multiple Inheritance (Not supported with Classes):</strong>
                    <br>Java does not support multiple inheritance (one child, two parents) to avoid complexity ("Diamond Problem"). It is achieved via Interfaces.
                </li>
            </ul>
        `)}
        
        ${section('Java Program: Multilevel Inheritance', `
            ${codeBlock(`// Grandparent
class Animal {
    void eat() {
        System.out.println("Eating...");
    }
}

// Parent (Child of Animal)
class Dog extends Animal {
    void bark() {
        System.out.println("Barking...");
    }
}

// Child (Child of Dog)
class BabyDog extends Dog {
    void weep() {
        System.out.println("Weeping...");
    }
}

public class MultilevelTest {
    public static void main(String[] args) {
        BabyDog d = new BabyDog();
        d.eat();  // From Animal
        d.bark(); // From Dog
        d.weep(); // From BabyDog
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM3Q2() {
    return `
        ${header('Q2. Polymorphism', 'Compile-time and Run-time (10 Marks)', 'code')}
        
        ${section('Definition', `
            <p><strong>Polymorphism</strong> means "many forms." It allows us to perform a single action in different ways. In Java, it allows an object to behave differently based on the context.</p>
        `)}
        
        ${section('1. Compile-time Polymorphism (Method Overloading)', `
            <ul>
                <li>Also called <strong>Static Binding</strong>.</li>
                <li>The method to be called is decided by the compiler.</li>
                <li><strong>How:</strong> By having multiple methods with the same name but different parameters in the same class.</li>
            </ul>
            <p><strong>Example (Overloading):</strong></p>
            ${codeBlock(`class MathHelper {
    // Method 1
    int add(int a, int b) { return a + b; }
    
    // Method 2 (Different param type)
    double add(double a, double b) { return a + b; }
}`, 'java')}
        `)}
        
        ${section('2. Run-time Polymorphism (Method Overriding)', `
            <ul>
                <li>Also called <strong>Dynamic Binding</strong>.</li>
                <li>The method to be called is decided at runtime (when the program is running).</li>
                <li><strong>How:</strong> By defining a method in the Child class that has the same name, same return type, and same parameters as a method in the Parent class.</li>
            </ul>
            <p><strong>Example (Overriding):</strong></p>
            ${codeBlock(`class Bank {
    int getInterestRate() { return 0; }
}

class SBI extends Bank {
    // Overriding the method
    int getInterestRate() { return 8; }
}

class HDFC extends Bank {
    // Overriding the method
    int getInterestRate() { return 9; }
}

public class TestPolymorphism {
    public static void main(String[] args) {
        Bank b; // Reference of Parent
        
        b = new SBI(); 
        System.out.println("SBI Rate: " + b.getInterestRate()); // Output: 8
        
        b = new HDFC();
        System.out.println("HDFC Rate: " + b.getInterestRate()); // Output: 9
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM3Q3() {
    return `
        ${header('Q3. Packages in Java', 'User-defined, java.util, java.lang (8 Marks)', 'theory')}
        
        ${section('Definition', `
            <p>A <strong>Package</strong> is a group of similar types of classes, interfaces, and sub-packages. It is like a folder on your computer used to organize files.</p>
            <p><strong>Purpose:</strong> Prevents naming conflicts and controls access.</p>
        `)}
        
        ${section('Creating a User-Defined Package', `
            <ol>
                <li>Use the keyword <code>package packageName;</code> as the first line of the file.</li>
                <li>Save the file as <code>ClassName.java</code>.</li>
                <li>Compile using <code>javac -d . ClassName.java</code> (This creates the folder automatically).</li>
            </ol>
            
            <p><strong>Example:</strong></p>
            <p>File: MyClass.java</p>
            ${codeBlock(`package mypack; // Creating package

public class MyClass {
    public void msg() { System.out.println("Hello from Package"); }
}`, 'java')}
            
            <p>File: Test.java (Outside package)</p>
            ${codeBlock(`import mypack.MyClass; // Accessing package

class Test {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.msg();
    }
}`, 'java')}
        `)}
        
        ${section('Importance of Built-in Packages', `
            <ul>
                <li><strong>java.lang:</strong>
                    <br>This is the default package imported in every Java program.
                    <br>Contains essential classes like <code>System</code>, <code>String</code>, <code>Object</code>, <code>Math</code>.
                </li>
                <li><strong>java.util:</strong>
                    <br>Contains utility classes for data structures and miscellaneous tasks.
                    <br>Examples: <code>Scanner</code> (input), <code>Date</code>, <code>ArrayList</code>, <code>Random</code>.
                </li>
            </ul>
        `)}
    `;
}

function renderJavaM3Q4() {
    return `
        ${header('Q4. Interface in Java', 'Definition, Implementation, vs Abstract Class (8 Marks)', 'code')}
        
        ${section('Definition', `
            <p>An <strong>Interface</strong> is a blueprint of a class. It contains static constants and abstract methods.</p>
            <ul>
                <li>It supports <strong>Multiple Inheritance</strong> in Java.</li>
                <li>It cannot be instantiated.</li>
                <li>Keyword: <code>interface</code> to define, <code>implements</code> to use.</li>
            </ul>
        `)}
        
        ${section('Syntax & Implementation', `
            ${codeBlock(`// Defining Interface
interface Printable {
    void print(); // Abstract method (no body)
}

// Implementing Interface
class Document implements Printable {
    public void print() {
        System.out.println("Printing Document...");
    }
}`, 'java')}
        `)}
        
        ${section('Difference: Abstract Class vs Interface', `
            ${table(
        ['Feature', 'Abstract Class', 'Interface'],
        [
            ['Methods', 'Can have abstract and non-abstract (concrete) methods.', 'Only abstract methods (until Java 8).'],
            ['Variables', 'Can have final, non-final, static, and non-static variables.', 'Variables are always public static final.'],
            ['Inheritance', 'A class extends one abstract class.', 'A class can implement multiple interfaces.'],
            ['Keyword', 'extends', 'implements'],
            ['Constructor', 'Can have constructors.', 'Cannot have constructors.']
        ]
    )}
        `)}
    `;
}

function renderJavaM3Q5() {
    return `
        ${header('Q5. Abstract Classes', 'Can we instantiate? (6 Marks)', 'theory')}
        
        ${section('Definition', `
            <p>A class declared with the <code>abstract</code> keyword is known as an <strong>Abstract Class</strong>.</p>
            <ul>
                <li>It can have abstract methods (without body) and concrete methods (with body).</li>
                <li>It shows the "outline" of functionality but leaves implementation to child classes.</li>
            </ul>
        `)}
        
        ${section('Can we instantiate an Abstract Class?', `
            <p><strong>No.</strong> We cannot create an object of an abstract class using the <code>new</code> keyword.</p>
            
            <p><strong>Justification:</strong></p>
            <p>An abstract class is like an incomplete template. It may contain methods without a body (logic). If Java allowed us to create an object, and we called that empty method, the program wouldn't know what to do. Therefore, instantiation is blocked to ensure safety.</p>
        `)}
        
        ${section('Example', `
            ${codeBlock(`abstract class Shape {
    abstract void draw();
}

class Test {
    public static void main(String args[]) {
        // Shape s = new Shape(); // Compile Time Error!
        System.out.println("Cannot instantiate Shape");
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM3Q6() {
    return `
        ${header('Q6. super Keyword', 'Usage in Java (6 Marks)', 'code')}
        
        ${section('Definition', `
            <p>The <strong>super</strong> keyword is a reference variable used to refer to the immediate parent class object.</p>
        `)}
        
        ${section('Three Main Uses', `
            <ol>
                <li><strong>To refer to Parent Class Instance Variable:</strong>
                    <br>Used when parent and child have variables with the same name.
                    <br>Syntax: <code>super.variableName</code>
                </li>
                <li><strong>To invoke Parent Class Method:</strong>
                    <br>Used if the child overrides a method but wants to call the parent's version.
                    <br>Syntax: <code>super.methodName()</code>
                </li>
                <li><strong>To invoke Parent Class Constructor:</strong>
                    <br>Used to call the parent's constructor from the child's constructor.
                    <br>Syntax: <code>super();</code> (Must be the first line).
                </li>
            </ol>
        `)}
        
        ${section('Example', `
            ${codeBlock(`class Animal {
    String color = "White";
}

class Dog extends Animal {
    String color = "Black";
    
    void printColor() {
        System.out.println(color);       // Prints Black (Child)
        System.out.println(super.color); // Prints White (Parent)
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM3Q7() {
    return `
        ${header('Q7. final Keyword', 'Variable, Method, Class (6 Marks)', 'theory')}
        
        ${section('Definition', `
            <p>The <strong>final</strong> keyword is used to restrict the user. It means "constant" or "cannot be changed."</p>
        `)}
        
        ${section('1. Final Variable', `
            <p><strong>Effect:</strong> The value cannot be changed once assigned. It becomes a constant.</p>
            <p><strong>Example:</strong> <code>final int MAX = 100; MAX = 200; // Error!</code></p>
        `)}
        
        ${section('2. Final Method', `
            <p><strong>Effect:</strong> The method cannot be overridden by the child class.</p>
            <p><strong>Example:</strong></p>
            ${codeBlock(`class Parent { final void run() {} }
class Child extends Parent { void run() {} } // Error!`, 'java')}
        `)}
        
        ${section('3. Final Class', `
            <p><strong>Effect:</strong> The class cannot be inherited (cannot have a child class).</p>
            <p><strong>Example:</strong></p>
            ${codeBlock(`final class A {}
class B extends A {} // Error!`, 'java')}
        `)}
    `;
}

function renderJavaM3Q8() {
    return `
        ${header('Q8. Dynamic Method Dispatch', 'Runtime Polymorphism (8 Marks)', 'code')}
        
        ${section('Definition', `
            <p><strong>Dynamic Method Dispatch</strong> (also known as Runtime Polymorphism) is a mechanism where a call to an overridden method is resolved at run-time rather than compile-time.</p>
        `)}
        
        ${section('How it works', `
            <ul>
                <li>A Parent class reference variable refers to a Child class object.</li>
                <li>Java determines which method to call based on the <strong>actual object</strong> being referred to, not the reference type.</li>
            </ul>
            <p><strong>Syntax:</strong> <code>Parent obj = new Child();</code></p>
        `)}
        
        ${section('Example', `
            ${codeBlock(`class Game {
    void play() { System.out.println("Playing Game..."); }
}

class Cricket extends Game {
    void play() { System.out.println("Playing Cricket..."); }
}

class Football extends Game {
    void play() { System.out.println("Playing Football..."); }
}

public class DispatchDemo {
    public static void main(String[] args) {
        Game g; // Parent Reference
        
        g = new Cricket(); // Object is Cricket
        g.play(); // Output: Playing Cricket...
        
        g = new Football(); // Object is Football
        g.play(); // Output: Playing Football...
    }
}`, 'java')}
            
            <p><strong>Significance:</strong> It allows Java programs to be flexible and easily extensible.</p>
        `)}
    `;
}
