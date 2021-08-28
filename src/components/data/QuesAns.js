export const QuesAns = [
    {
        id:"Q1",
        ques:"Write Chinese room test. Which limitations of Turing test are addressed Chinese room test ?",
        ans:"The Chinese room is designed to show that the Turing test is insufficient to detect the presence of consciousness, even if the room can behave or function as a conscious mind would.Indeed, it's not necessary for a program to speak in order for it to be intelligent. Thus, many humans and intelligent systems would likely fail the Turing Test. ... Moreover, the Turing Test is a poor test of intelligence — one that it encourages trickery, not intelligent behaviour"
    },
    {
        id:"Q2",
        ques:"What is an Expert System ? Briefly explain the shells of Expert System",
        ans:"An expert system is a computer program that uses artificial intelligence (AI) technologies to simulate the judgment and behavior of a human or an organization that has expert knowledge and experience in a particular field.The main purpose of ES is to replicate knowledge and skills of human experts in a particular area, and then to use this knowledge to solve similar problems without human experts participation.The generic components of a shell : the knowledge acquisition, the knowledge Base, the reasoning, the explanation and the user interface"
    },
    {
        id:"Q3",
        ques:"What are Fuzzy sets ? How do Fuzzy sets differ from Crisp sets ? What is the relevance of Fuzzy logic in Artificial Intelligence?",
        ans:"Fuzzy set theory permits membership function valued in the interval [0,1]. Example: Words like young, tall, good or high are fuzzy. Crisp set defines the value is either 0 or 1.	Fuzzy set defines the value between 0 and 1 including both 0 and 1 while Crisp is also called a classical set.Fuzzy specifies the degree to which something is true. Crisp set shows full membership while fuzzy sets shows partial membership"
    },
    {
        id:"Q4",
        ques:"What are Agents in Artificial Intelligence ?Briefly discuss the properties of Agents",
        ans:"The agents sense the environment through sensors and act on their environment through actuators. An AI agent can have mental properties such as knowledge, belief, intention, etc An AI agent must have the ability to perceive the environment,The observation must be used to make decisions,Decision should result in an action,The action taken by an AI agent must be a rational action"
    },
    {
        id:"Q5",
        ques:"Write Breadth First Search (BFS) algorithm",
        ans:"Breadth First Search (BFS) algorithm traverses a graph in a breadthward motion and uses a queue to remember to get the next vertex to start a search, when a dead end occurs in any iteration.Rule 1 − Visit the adjacent unvisited vertex. Mark it as visited. Display it. Insert it in a queue Rule 2 − If no adjacent vertex is found, remove the first vertex from the queue, Repeat Rule 1 and Rule 2 until the queue is empty"
    },
    {
        id:"Q6",
        ques:"Write the importance of CUT and FAIL predicates in PROLOG. Give suitable example for each",
        ans:"The cut, in Prolog, is a goal, written as !, which always succeeds, but cannot be backtracked. It is best used to prevent unwanted backtracking, including the finding of extra solutions by Prolog and to avoid unnecessary computations. The cut should be used sparingly. Fail,As its name suggests, fail/0 is a special symbol that will immediately fail when Prolog encounters it as a goal. That may not sound too useful, but remember: when Prolog fails, it tries to backtrack . Thus fail/0 can be viewed as an instruction to force backtracking."
    },
    {
        id:"Q7",
        ques:"What do you understand by ‘‘Knowledge Representation’’ in Artificial Intelligence ?Briefly discuss any two knowledge representation schemes",
        ans:"Knowledge Representation and Reasoning (KR, KRR) represents information from the real world for a computer to understand and then utilize this knowledge to solve complex real-life problems like communicating with human beings in natural language. Knowledge representation in AI is not just about storing data in a database, it allows a machine to learn from that knowledge and behave intelligently like a human being. 1. Declarative Knowledge 2. Procedural Knowledge 3. Meta-knowledge 4. Heuristic knowledge 5. Structurl Knowledge"
    },
    {
        id:"Q8",
        ques:"what is Depth First Search (DFS)",
        ans:"Depth first search (DFS) algorithm starts with the initial node of the graph G, and then goes to deeper and deeper until we find the goal node or the node which has no children. The algorithm, then backtracks from the dead end towards the most recent node that is yet to be completely unexplored.The data structure which is being used in DFS is stack. The process is similar to BFS algorithm. In DFS, the edges that leads to an unvisited node are called discovery edges while the edges that leads to an already visited node are called block edges. Step 1: SET STATUS = 1 (ready state) for each node in G Step 2: Push the starting node A on the stack and set its STATUS = 2 (waiting state) Step 3: Repeat Steps 4 and 5 until STACK is empty Step 4: Pop the top node N. Process it and set its STATUS = 3 (processed state) Step 5: Push on the stack all the neighbours of N that are in the ready state (whose STATUS = 1) and set their STATUS = 2 (waiting state)[END OF LOOP] Step 6: EXIT"
    },
    // {
    //     id:"Q9",
    //     ques:"what is vue",
    //     ans:"vue  is a js framework"
    // },
    // {
    //     id:"Q10",
    //     ques:"what is vue",
    //     ans:"vue  is a js framework"
    // },
    // {
    //     id:"Q11",
    //     ques:"what is vue",
    //     ans:"vue  is a js framework"
    // },
    // {
    //     id:"Q12",
    //     ques:"what is vue",
    //     ans:"vue  is a js framework"
    // },
    // {
    //     id:"Q13",
    //     ques:"what is vue",
    //     ans:"vue  is a js framework"
    // },
       
]