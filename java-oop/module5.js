// MODULE - V: I/O, Multithreading, and Exception Handling

function renderJavaM5Q1() {
    return `
        ${header('Q1. Exception Handling', 'try, catch, finally, throw, throws (10 Marks)', 'code')}
        
        ${section('Definition', `
            <p><strong>Exception Handling</strong> is a mechanism to handle runtime errors (like dividing by zero) so that the normal flow of the application can continue. It prevents the program from crashing abruptly.</p>
        `)}
        
        ${section('The 5 Keywords', `
            <ul>
                <li><strong>try:</strong>
                    <br>Used to wrap the code that might cause an error.
                    <br>It must be followed by a catch or finally block.
                </li>
                <li><strong>catch:</strong>
                    <br>Used to handle the exception. It executes only if an error occurs in the try block.
                </li>
                <li><strong>finally:</strong>
                    <br>A block that always executes, whether an exception occurs or not.
                    <br>Used for cleanup (e.g., closing files).
                </li>
                <li><strong>throw:</strong>
                    <br>Used to explicitly throw an exception from a method.
                    <br>Syntax: <code>throw new ArithmeticException("Error");</code>
                </li>
                <li><strong>throws:</strong>
                    <br>Used in the method signature to declare that this method might throw an exception, and the caller should handle it.
                </li>
            </ul>
        `)}
        
        ${section('Example Program', `
            ${codeBlock(`public class ExceptionDemo {
    // 'throws' tells Java this method might fail
    static void checkAge(int age) throws ArithmeticException {
        if (age < 18) {
            // 'throw' manually creates an error
            throw new ArithmeticException("Access Denied - You must be at least 18 years old.");
        } else {
            System.out.println("Access Granted!");
        }
    }

    public static void main(String[] args) {
        try {
            // 'try' block monitors for errors
            checkAge(15); 
        } 
        catch (ArithmeticException e) {
            // 'catch' handles the error
            System.out.println("Caught an Exception: " + e.getMessage());
        } 
        finally {
            // 'finally' always runs
            System.out.println("This block always runs.");
        }
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM5Q2() {
    return `
        ${header('Q2. Thread Life Cycle', 'Newborn, Runnable, Running, Blocked, Dead (10 Marks)', 'theory')}
        
        ${section('Definition', `
            <p>A <strong>Thread</strong> is a lightweight sub-process (a small unit of processing). The Life Cycle of a thread describes the different stages a thread goes through from creation to termination.</p>
        `)}
        
        ${section('The 5 States', `
            <ol>
                <li><strong>Newborn (New):</strong>
                    <br>The thread is created using the <code>new</code> keyword but has not started yet.
                    <br>Code: <code>Thread t = new Thread();</code>
                </li>
                <li><strong>Runnable (Ready):</strong>
                    <br>After calling <code>t.start()</code>, the thread is ready to run and waits for the CPU processor.
                    <br>It is in a queue waiting for its turn.
                </li>
                <li><strong>Running:</strong>
                    <br>The CPU has picked the thread and is executing the code inside the <code>run()</code> method.
                    <br>This is the active state.
                </li>
                <li><strong>Blocked (Waiting/Sleeping):</strong>
                    <br>The thread is alive but not active. It is waiting for I/O or has been put to sleep (<code>sleep()</code>, <code>wait()</code>).
                    <br>It moves back to Runnable when the wait is over.
                </li>
                <li><strong>Dead (Terminated):</strong>
                    <br>The thread has finished its work (exited <code>run()</code> method) or was stopped abruptly. It cannot be restarted.
                </li>
            </ol>
            
            <p><strong>Flow:</strong></p>
            <p>Newborn → (start) → Runnable ↔ (Scheduler) → Running → (Exit) → Dead</p>
            <p>(Running → sleep/wait → Blocked → Runnable)</p>
        `)}
    `;
}

function renderJavaM5Q3() {
    return `
        ${header('Q3. File I/O in Java', 'FileInputStream & FileOutputStream (10 Marks)', 'code')}
        
        ${section('Concept', `
            <p>Java uses <strong>Streams</strong> for I/O. A stream is a flow of data.</p>
            <ul>
                <li><strong>FileInputStream:</strong> Used to read bytes (images, audio, or text) from a file.</li>
                <li><strong>FileOutputStream:</strong> Used to write bytes to a file.</li>
            </ul>
        `)}
        
        ${section('A. Writing to a File (FileOutputStream)', `
            ${codeBlock(`import java.io.*;

public class WriteFile {
    public static void main(String args[]) {
        try {
            FileOutputStream fout = new FileOutputStream("test.txt");
            String s = "Java I/O is easy!";
            byte b[] = s.getBytes(); // Convert string to byte array
            
            fout.write(b); // Write bytes to file
            fout.close();  // Close stream
            System.out.println("Success: Data written to file.");
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}`, 'java')}
        `)}
        
        ${section('B. Reading from a File (FileInputStream)', `
            ${codeBlock(`import java.io.*;

public class ReadFile {
    public static void main(String args[]) {
        try {
            FileInputStream fin = new FileInputStream("test.txt");
            int i = 0;
            // Read byte by byte until end (-1)
            while ((i = fin.read()) != -1) {
                System.out.print((char)i); // Convert byte to char
            }
            fin.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM5Q4() {
    return `
        ${header('Q4. Creating Threads', 'Thread Class vs Runnable Interface (10 Marks)', 'code')}
        
        ${section('Answer', `
            <p>There are two ways to create a thread in Java.</p>
        `)}
        
        ${section('Method 1: By Extending Thread Class', `
            <ul>
                <li><strong>Pros:</strong> Simpler to use.</li>
                <li><strong>Cons:</strong> You cannot extend any other class (Java doesn't support multiple inheritance).</li>
            </ul>
        `)}
        
        ${section('Method 2: By Implementing Runnable Interface', `
            <ul>
                <li><strong>Pros:</strong> You can still extend another class.</li>
            </ul>
        `)}
        
        ${section('Complete Program', `
            ${codeBlock(`// Way 1: Extending Thread
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running (Extends Thread)");
    }
}

// Way 2: Implementing Runnable Interface
// Pros: You can still extend another class.
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread is running (Implements Runnable)");
    }
}

public class MultiTest {
    public static void main(String args[]) {
        // Method 1 Execution
        MyThread t1 = new MyThread();
        t1.start(); // Starts the thread

        // Method 2 Execution
        MyRunnable r = new MyRunnable();
        Thread t2 = new Thread(r); // Pass runnable object to Thread
        t2.start();
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM5Q5() {
    return `
        ${header('Q5. Thread Synchronization', 'synchronized block & method (8 Marks)', 'code')}
        
        ${section('Definition', `
            <p><strong>Synchronization</strong> is the capability to control the access of multiple threads to any shared resource. It prevents two threads from interfering with each other and corrupting data.</p>
        `)}
        
        ${section('Why is it needed?', `
            <p>If two threads try to update the same variable at the exact same time (e.g., withdrawing money from the same bank account), the final result might be wrong (Data Inconsistency). Synchronization allows only one thread at a time to access the resource.</p>
        `)}
        
        ${section('1. Synchronized Method', `
            <p>Locks the object for the entire method.</p>
            ${codeBlock(`class Table {
    // Only one thread can access this at a time
    synchronized void printTable(int n) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(n * i);
            try { Thread.sleep(400); } catch (Exception e) {}
        }
    }
}`, 'java')}
        `)}
        
        ${section('2. Synchronized Block', `
            <p>Locks only a specific part of the code (Better performance).</p>
            ${codeBlock(`void printTable(int n) {
    System.out.println("Not Synchronized part");
    
    synchronized(this) { // Lock starts here
        for (int i = 1; i <= 5; i++) {
            System.out.println(n * i);
        }
    } // Lock ends here
}`, 'java')}
        `)}
    `;
}

function renderJavaM5Q6() {
    return `
        ${header('Q6. Random Access Files', 'RandomAccessFile Class (8 Marks)', 'theory')}
        
        ${section('Definition', `
            <p>Usually, we read files sequentially (from start to end). The <strong>RandomAccessFile</strong> class allows us to move the file pointer to any position in the file to read or write data immediately. It is like a record player needle that can drop anywhere on the record.</p>
            <ul>
                <li>It acts like both InputStream and OutputStream.</li>
                <li><strong>Constructor:</strong> <code>RandomAccessFile file = new RandomAccessFile("filename.txt", "rw");</code> (rw = read/write).</li>
            </ul>
        `)}
        
        ${section('Common Methods', `
            <ul>
                <li><strong>seek(long pos):</strong> Moves the file pointer to the specified position (measured in bytes from the beginning).</li>
                <li><strong>read():</strong> Reads a byte of data from the current position.</li>
                <li><strong>write(int b):</strong> Writes a byte to the current position.</li>
                <li><strong>getFilePointer():</strong> Returns the current offset (position) of the pointer.</li>
                <li><strong>length():</strong> Returns the length of the file.</li>
            </ul>
        `)}
    `;
}

function renderJavaM5Q7() {
    return `
        ${header('Q7. Thread Priorities', 'setPriority & getPriority (6 Marks)', 'theory')}
        
        ${section('Definition', `
            <p>Every thread has a priority, which is an integer number. The Thread Scheduler uses priorities to decide which thread should run first. Higher priority threads usually get CPU time before lower priority ones.</p>
        `)}
        
        ${section('Range', `
            <p>The range is from <strong>1 to 10</strong>.</p>
            <p><strong>Constants:</strong></p>
            <ul>
                <li><code>Thread.MIN_PRIORITY</code> (Value = 1): Lowest priority.</li>
                <li><code>Thread.NORM_PRIORITY</code> (Value = 5): Default priority if you don't set one.</li>
                <li><code>Thread.MAX_PRIORITY</code> (Value = 10): Highest priority.</li>
            </ul>
        `)}
        
        ${section('Methods', `
            <ul>
                <li><strong>setPriority(int newPriority):</strong> Sets the priority of the thread.</li>
                <li><strong>getPriority():</strong> Returns the current priority.</li>
            </ul>
            
            <p><strong>Example:</strong></p>
            ${codeBlock(`Thread t1 = new Thread();
t1.setPriority(Thread.MAX_PRIORITY); // Set to 10
System.out.println(t1.getPriority()); // Output: 10`, 'java')}
        `)}
    `;
}

function renderJavaM5Q8() {
    return `
        ${header('Q8. User-Defined Exceptions', 'Custom Exception (8 Marks)', 'code')}
        
        ${section('Definition', `
            <p>Java provides many built-in exceptions (like ArithmeticException), but sometimes we need to create our own exception specific to our business logic (e.g., InsufficientFundsException). These are called <strong>User-Defined or Custom Exceptions</strong>.</p>
        `)}
        
        ${section('How to create', `
            <ol>
                <li>Create a class that extends <code>Exception</code>.</li>
                <li>Pass the error message to the parent constructor using <code>super()</code>.</li>
            </ol>
        `)}
        
        ${section('Program (InvalidAgeException)', `
            ${codeBlock(`// 1. Create the Custom Exception
class InvalidAgeException extends Exception {
    InvalidAgeException(String s) {
        super(s); // Pass message to parent Exception class
    }
}

// 2. Use the Exception
public class CustomTest {
    static void validate(int age) throws InvalidAgeException {
        if (age < 18) {
            // Throwing our custom exception
            throw new InvalidAgeException("Not valid age for voting");
        } else {
            System.out.println("Welcome to vote");
        }
    }

    public static void main(String args[]) {
        try {
            validate(13);
        } catch (InvalidAgeException m) {
            System.out.println("Exception Caught: " + m.getMessage());
        }
    }
}`, 'java')}
        `)}
    `;
}
