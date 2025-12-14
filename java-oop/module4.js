// MODULE - IV: Event and GUI Programming

function renderJavaM4Q1() {
    return `
        ${header('Q1. Event and Delegation Event Model', 'Sources and Listeners (10 Marks)', 'theory')}
        
        ${section('1. Define Event', `
            <p>An <strong>Event</strong> is a change in the state of an object. In simple terms, it is something the user does, like clicking a button, moving the mouse, or typing a key.</p>
            <p><strong>Examples:</strong> ActionEvent, MouseEvent, KeyEvent.</p>
        `)}
        
        ${section('2. Delegation Event Model', `
            <p>Java uses the <strong>Delegation Event Model</strong> to handle events.</p>
            <ul>
                <li>In this model, the <strong>Source</strong> (e.g., Button) creates an event and sends it to a <strong>Listener</strong> (e.g., Code).</li>
                <li>The Listener waits for the event and processes it.</li>
                <li>It is called "Delegation" because the Source does not handle the event itself; it <strong>delegates</strong> (gives) the work to the Listener.</li>
            </ul>
        `)}
        
        ${section('3. Key Components', `
            <h4>A. Event Source:</h4>
            <ul>
                <li>The object that generates the event.</li>
                <li>Example: A Button is a source. When clicked, it fires an event.</li>
                <li>Task: It must register a listener using methods like <code>addActionListener()</code>.</li>
            </ul>
            
            <h4>B. Event Listener:</h4>
            <ul>
                <li>The object that receives and handles the event.</li>
                <li>It is an Interface that contains methods to process the event.</li>
                <li>Example: <code>ActionListener</code> interface has the <code>actionPerformed()</code> method.</li>
            </ul>
            
            <h4>Real-life Analogy:</h4>
            <ul>
                <li><strong>Source:</strong> You (Sender).</li>
                <li><strong>Event:</strong> Throwing a ball.</li>
                <li><strong>Listener:</strong> Your friend (Catcher) who catches the ball and reacts.</li>
            </ul>
        `)}
    `;
}

function renderJavaM4Q2() {
    return `
        ${header('Q2. Types of Events', 'MouseEvent, KeyEvent, ActionEvent (10 Marks)', 'code')}
        
        ${section('Answer', `
            <p>Java stores different events in the <code>java.awt.event</code> package.</p>
            
            <h4>1. ActionEvent:</h4>
            <ul>
                <li>Generated when a component is activated (e.g., Button click, Menu item selection).</li>
                <li><strong>Listener:</strong> ActionListener</li>
                <li><strong>Method:</strong> <code>actionPerformed()</code></li>
            </ul>
            
            <h4>2. MouseEvent:</h4>
            <ul>
                <li>Generated when the mouse is used.</li>
                <li><strong>Listener:</strong> MouseListener</li>
                <li><strong>Methods:</strong> mouseClicked, mousePressed, mouseReleased, mouseEntered, mouseExited.</li>
            </ul>
            
            <h4>3. KeyEvent:</h4>
            <ul>
                <li>Generated when keyboard input occurs.</li>
                <li><strong>Listener:</strong> KeyListener</li>
                <li><strong>Methods:</strong> keyPressed, keyReleased, keyTyped.</li>
            </ul>
        `)}
        
        ${section('Example Program (Button Click - ActionEvent)', `
            ${codeBlock(`import java.awt.*;
import java.awt.event.*;

class MyFrame extends Frame implements ActionListener {
    TextField tf;
    Button b;

    MyFrame() {
        // Create components
        tf = new TextField();
        tf.setBounds(60, 50, 170, 20);
        
        b = new Button("Click Me");
        b.setBounds(100, 120, 80, 30);
        
        // Register Listener
        b.addActionListener(this); 

        add(b); add(tf);
        setSize(300, 300);
        setLayout(null);
        setVisible(true);
    }

    // Define what happens on click
    public void actionPerformed(ActionEvent e) {
        tf.setText("Welcome to Java Events!");
    }

    public static void main(String args[]) {
        new MyFrame();
    }
}`, 'java')}
        `)}
    `;
}

function renderJavaM4Q3() {
    return `
        ${header('Q3. GUI Components', 'Button, Label, TextField, Checkbox, Choice (8 Marks)', 'theory')}
        
        ${section('Answer', `
            <p>These components are part of the <strong>AWT (Abstract Window Toolkit)</strong> package.</p>
            
            <h4>1. Label:</h4>
            <ul>
                <li>A simple text used to display instructions (Read-only).</li>
                <li><strong>Constructor:</strong> <code>new Label("Enter Name");</code></li>
                <li><strong>Method:</strong> <code>setText(String s)</code>, <code>getText()</code>.</li>
            </ul>
            
            <h4>2. Button:</h4>
            <ul>
                <li>A push button that performs an action when clicked.</li>
                <li><strong>Constructor:</strong> <code>new Button("Submit");</code></li>
                <li><strong>Method:</strong> <code>setLabel(String s)</code>, <code>addActionListener()</code>.</li>
            </ul>
            
            <h4>3. TextField:</h4>
            <ul>
                <li>A single-line box for user input.</li>
                <li><strong>Constructor:</strong> <code>new TextField(20);</code> (20 columns wide).</li>
                <li><strong>Method:</strong> <code>getText()</code>, <code>setText(String s)</code>.</li>
            </ul>
            
            <h4>4. Checkbox:</h4>
            <ul>
                <li>Used to select multiple options (Tick box).</li>
                <li><strong>Constructor:</strong> <code>new Checkbox("Java", true);</code> (Checked by default).</li>
                <li><strong>Method:</strong> <code>getState()</code>, <code>setState(boolean b)</code>.</li>
            </ul>
            
            <h4>5. Choice (Dropdown List):</h4>
            <ul>
                <li>A pop-up menu of choices.</li>
                <li><strong>Constructor:</strong> <code>Choice c = new Choice();</code></li>
                <li><strong>Method:</strong> <code>add("Item 1")</code>, <code>getSelectedItem()</code>.</li>
            </ul>
        `)}
    `;
}

function renderJavaM4Q4() {
    return `
        ${header('Q4. Applet Life Cycle', 'Definition and Advantages (10 Marks)', 'theory')}
        
        ${section('Definition', `
            <p>An <strong>Applet</strong> is a special type of Java program that runs inside a web browser (or Applet Viewer). It does not have a <code>main()</code> method. It is used to generate dynamic content on websites.</p>
        `)}
        
        ${section('Life Cycle of an Applet (5 Stages)', `
            <ol>
                <li><strong>Initialization State (init):</strong>
                    <br>Called only once when the applet is first loaded.
                    <br>Used to initialize variables or components.
                    <br>Method: <code>public void init()</code>
                </li>
                <li><strong>Running State (start):</strong>
                    <br>Called after init(). It is also called whenever the user returns to the HTML page containing the applet.
                    <br>Method: <code>public void start()</code>
                </li>
                <li><strong>Display State (paint):</strong>
                    <br>Used to draw shapes, text, or images on the screen.
                    <br>Method: <code>public void paint(Graphics g)</code>
                </li>
                <li><strong>Idle/Stopped State (stop):</strong>
                    <br>Called when the user leaves the page or minimizes the window.
                    <br>Method: <code>public void stop()</code>
                </li>
                <li><strong>Dead/Destroyed State (destroy):</strong>
                    <br>Called only once when the browser is closed. Used to clean up memory.
                    <br>Method: <code>public void destroy()</code>
                </li>
            </ol>
            
            <p><strong>Flow:</strong> Born → init() → start() → paint() ↔ stop() → destroy() → Dead</p>
        `)}
        
        ${section('Advantages of Applets', `
            <ul>
                <li><strong>Client-Side Execution:</strong> It runs on the user's browser, reducing server load.</li>
                <li><strong>Secure:</strong> Applets run in a "sandbox" and cannot access local files easily.</li>
                <li><strong>Dynamic:</strong> Can create animations and games.</li>
            </ul>
        `)}
    `;
}

function renderJavaM4Q5() {
    return `
        ${header('Q5. Layout Managers', 'FlowLayout, BorderLayout, GridLayout (8 Marks)', 'theory')}
        
        ${section('Definition', `
            <p><strong>Layout Managers</strong> automatically arrange GUI components (buttons, labels) inside a container so you don't have to set exact coordinates.</p>
        `)}
        
        ${section('1. FlowLayout (The Default for Applets)', `
            <ul>
                <li>Arranges components in a line, one after another (Left to Right).</li>
                <li>If the line is full, it moves to the next line.</li>
                <li><strong>Syntax:</strong> <code>setLayout(new FlowLayout());</code></li>
            </ul>
        `)}
        
        ${section('2. BorderLayout (The Default for Frames)', `
            <ul>
                <li>Divides the window into 5 regions: North, South, East, West, and Center.</li>
                <li>You choose where to put the component.</li>
                <li><strong>Syntax:</strong> <code>add(button, BorderLayout.NORTH);</code></li>
            </ul>
        `)}
        
        ${section('3. GridLayout', `
            <ul>
                <li>Arranges components in a rectangular grid (Matrix) of Rows and Columns.</li>
                <li>All cells are the same size.</li>
                <li><strong>Syntax:</strong> <code>setLayout(new GridLayout(3, 2));</code> (3 rows, 2 columns).</li>
            </ul>
        `)}
    `;
}

function renderJavaM4Q6() {
    return `
        ${header('Q6. Menus in Java', 'MenuBar, Menu, MenuItem (6 Marks)', 'theory')}
        
        ${section('Answer', `
            <p>In Java AWT, menus are created using a hierarchy of three classes.</p>
            
            <h4>1. MenuBar:</h4>
            <ul>
                <li>The bar displayed at the top of the frame.</li>
                <li>Code: <code>MenuBar mb = new MenuBar();</code></li>
            </ul>
            
            <h4>2. Menu:</h4>
            <ul>
                <li>The dropdown categories visible on the MenuBar (e.g., "File", "Edit").</li>
                <li>Code: <code>Menu fileMenu = new Menu("File");</code></li>
            </ul>
            
            <h4>3. MenuItem:</h4>
            <ul>
                <li>The actual options inside the dropdown menu (e.g., "Open", "Save", "Exit").</li>
                <li>Code: <code>MenuItem openItem = new MenuItem("Open");</code></li>
            </ul>
            
            <h4>How to link them:</h4>
            <ol>
                <li>Add MenuItem to Menu. (<code>fileMenu.add(openItem);</code>)</li>
                <li>Add Menu to MenuBar. (<code>mb.add(fileMenu);</code>)</li>
                <li>Set MenuBar to Frame. (<code>frame.setMenuBar(mb);</code>)</li>
            </ol>
        `)}
    `;
}

function renderJavaM4Q7() {
    return `
        ${header('Q7. Adapter Classes', 'Event Handling (6 Marks)', 'code')}
        
        ${section('The Problem', `
            <p>Listener interfaces (like MouseListener) often have many methods. If you implement MouseListener, you must write code for all 5 methods (clicked, pressed, released, entered, exited), even if you only need one (like clicked). This makes code long and messy.</p>
        `)}
        
        ${section('The Solution (Adapter Classes)', `
            <p>An <strong>Adapter Class</strong> is a built-in class that implements the interface with empty bodies for all methods.</p>
            <ul>
                <li>Instead of implementing the Interface, you <strong>extend</strong> the Adapter Class.</li>
                <li>You only override the method you need.</li>
            </ul>
            
            <p><strong>Example:</strong></p>
            <ul>
                <li>WindowListener has 7 methods.</li>
                <li>WindowAdapter is the adapter class.</li>
                <li>We can just override windowClosing to close the app properly.</li>
            </ul>
            
            ${codeBlock(`// Using Adapter (Short and Sweet)
addWindowListener(new WindowAdapter() {
    public void windowClosing(WindowEvent e) {
        System.exit(0);
    }
});`, 'java')}
        `)}
    `;
}

function renderJavaM4Q8() {
    return `
        ${header('Q8. Applets vs Standalone Applications', '5 Differences (6 Marks)', 'theory')}
        
        ${section('Comparison', `
            ${table(
        ['Feature', 'Standalone Application', 'Java Applet'],
        [
            ['1. Starting Point', 'Starts execution from the main() method.', 'Starts execution from init() method.'],
            ['2. Execution', 'Runs independently on the computer using JRE.', 'Runs inside a Web Browser or AppletViewer.'],
            ['3. Security', 'Has full access to local files and system (Trusted).', 'Has limited access (runs in a Sandbox) for security.'],
            ['4. Installation', 'Must be installed explicitly on the machine.', 'No installation needed; downloads automatically via HTML.'],
            ['5. IO Support', 'Uses Console I/O (System.in/out) easily.', 'Mostly Graphical I/O; no Console support.']
        ]
    )}
        `)}
    `;
}
