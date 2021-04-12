export const questionData={
    CNQuiz:[
        {
            id: 1,
            quest: "What is the efficiency in Go-Back-N protocol",
            opt1: "1/(1+2a)",
            opt2: "1+2a",
            opt3: "n/(1+2a)",
            opt4: "2a",
            ans: "n/(1+2a)"
        }, 
        {
            id: 2,
            quest: "What is the efficiency in Stop-and-Wait protocol",
            opt1: "1/(1+2a)",
            opt2: "1+2a",
            opt3: "n/(1+2a)",
            opt4: "2a",
            ans: "1/(1+2a)"
        },
        {
            id: 3,
            quest: "What is the efficiency in Selective-Repeat protocol,if sender's window size is N",
            opt1: "1/(1+2a)",
            opt2: "1+2a",
            opt3: "N/(1+2a)",
            opt4: "1/(N+2a)",
            ans: "N/(1+2a)"
        },
        {
            id: 4,
            quest: "The protocol data unit(PDU) for the application layer in the Internet stack is: ",
            opt1: "Segment",
            opt2: "Datagram",
            opt3: "Message",
            opt4: "Frame",
            ans: "Message"
        },
        {
            id: 5,
            quest: "An Internet Service Provider(ISP) has the following chunk of CIDR-based IP addresses available with it:245.248.128.0/20. The ISP wants to give half of this chunk of addreses to Organization A, and a quarter to Organization B, while retaining the remaining with itself. Which of the following is a valid allocation of addresses to A and B?",
            opt1: "245.248.136.0/21 and 245.248.128.0/22",
            opt2: "245.248.128.0/21 and 245.248.128.0/22",
            opt3: "245.248.132.0/22 and 245.248.132.0/21",
            opt4: "245.248.136.0/22 and 245.248.132.0/21",
            ans: "245.248.136.0/21 and 245.248.128.0/22"
        },
        {
            id: 6,
            quest: "In an IPv4 datagram, the M bit is 0, the value of HLEN is 10, the value of total length is 400 and the fragment offset value is 300. The position of the datagram, the sequence numbers of the first and the last bytes of the payload, respectively are",
            opt1: "Last fragment, 2400 and 2789",
            opt2: "First fragment, 2400 and 2759",
            opt3: "Last fragment, 2400 and 2759",
            opt4: "Middle fragment, 300 and 689",
            ans: "Last fragment, 2400 and 2759"
        },
        {
            id: 7,
            quest: "One of the header fields in an IP datagram is the Time to Live(TTL)field.Which of the following statements best explains the need for this field?",
            opt1: "It can be used to prioritize packets",
            opt2: "It can be used to reduce delays",
            opt3: "It can be used to optimize throughput",
            opt4: "It can be used to prevent packet looping",
            ans: "It can be used to prevent packet looping"
        },
        {
            id: 8,
            quest: "In TCP, a unique sequence number is assigned to each",
            opt1: "Byte",
            opt2: "Word",
            opt3: "Segment",
            opt4: "Message",
            ans: "Byte"
        },
        {
            id: 9,
            quest: "For which one of the following reasons does Internet Protocol (IP) use the timeto- live (TTL) field in the IP datagram header",
            opt1: "Ensure packets reach destination within that time",
            opt2: "Prevent packets from looping indefinitely",
            opt3: "Discard packets that reach later than that time",
            opt4: "Limit the time for which a packet gets queued in intermediate routers",
            ans: "Prevent packets from looping indefinitely"
        },
        {
            id: 10,
            quest: "A subnet has been assigned a subnet mask of 255.255.255.192. What is the maximum number of hosts that can belong to this subnet?",
            opt1: "62",
            opt2: "14",
            opt3: "30",
            opt4: "126",
            ans: "62"
        }
    ],
    OSQuiz:[
        {
            id: 1,
            quest: "Which of the following is NOT a valid deadlock prevention scheme?",
            opt1: "Release all resources before requesting a new resource",
            opt2: "Number the resources uniquely and never request a lower numbered resource than the last one requested",
            opt3: "Never request a resource after releasing any resource",
            opt4: "Request and all required resources be allocated before execution.",
            ans: "Never request a resource after releasing any resource"
        }, 
        {
            id: 2,
            quest: "Consider a virtual memory system with FIFO page replacement policy. For an arbitrary page access pattern, increasing the number of page frames in main memory will ",
            opt1: "Some times increase the number of page faults",
            opt2: "Never affect the number of page faults",
            opt3: "Always increase the number of page faults",
            opt4: "Always decrease the number of page faults",
            ans: "Some times increase the number of page faults"
        },
        {
            id: 3,
            quest: "Which of the following requires a device driver? ",
            opt1: "Register",
            opt2: "Cache",
            opt3: "Main memory",
            opt4: "Disk",
            ans: "Disk"
        },
        {
            id: 4,
            quest: "Consider a machine with 64 MB physical memory and a 32-bit virtual address space. If the page size is 4KB, what is the approximate size of the page table?",
            opt1: "16 MB",
            opt2: "8 MB",
            opt3: "2 MB",
            opt4: "24 MB",
            ans: "2 MB"
        },
        {
            id: 5,
            quest: "More than one word are put in one cache block to ",
            opt1: "exploit the temporal locality of reference in a program",
            opt2: "exploit the spatial locality of reference in a program",
            opt3: "reduce the miss penalty",
            opt4: "none of the above",
            ans: "exploit the spatial locality of reference in a program"
        },
        {
            id: 6,
            quest: "Consider a set of n tasks with known runtimes r1, r2, … rn to be run on a uniprocessor machine. Which of the following processor scheduling algorithms will result in the maximum throughput?",
            opt1: "Round-Robin",
            opt2: "Highest-Response-Ratio-Next",
            opt3: "First-Come-First-Served",
            opt4: "Shortest-Job-First",
            ans: "Shortest-Job-First"
        },
        {
            id: 7,
            quest: " Suppose the time to service a page fault is on the average 10 milliseconds, while a memory access takes 1 microsecond. Then a 99.99% hit ratio results in average memory access time of ",
            opt1: "1.9999 milliseconds",
            opt2: "1 millisecond",
            opt3: "9.999 microseconds",
            opt4: "1.9999 microseconds",
            ans: "1.9999 microseconds"
        },
        {
            id: 8,
            quest: "Where does the swap space reside ?",
            opt1: "RAM",
            opt2: "Disk",
            opt3: "ROM",
            opt4: "On-Chip Cache",
            ans: "Disk"
        },
        {
            id: 9,
            quest: "In a system with 32 bit virtual addresses and 1 KB page size, use of one-level page tables for virtual to physical address translation is not practical because of",
            opt1: "the large amount of internal fragmentation",
            opt2: "the large amount of external fragmentation",
            opt3: "the large memory overhead in maintaining page tables",
            opt4: "the large computation overhead in the translation process",
            ans: "the large memory overhead in maintaining page tables"
        },
        {
            id: 10,
            quest: "A file system with 300 GByte uses a file descriptor with 8 direct block address. 1 indirect block address and 1 doubly indirect block address. The size of each disk block is 128 Bytes and the size of each disk block address is 8 Bytes. The maximum possible file size in this file system is",
            opt1: "3 Kbytes",
            opt2: "280 Bytes",
            opt3: "Dependent on the size of the disk",
            opt4: "35 Kbytes",
            ans: "35 Kbytes"
        }
    ],
    JSQuiz:[
        {
            id: 1,
            quest: "Inside which HTML element do we put the JavaScript?",
            opt1: "<scripting>",
            opt2: "<javascript>",
            opt3: "<js>",
            opt4: "<script>",
            ans: "<script>"
        }, 
        {
            id: 2,
            quest: "Where is the correct place to insert a JavaScript?",
            opt1: "Any where in HTML file",
            opt2: "The Tittle Section",
            opt3: "The head section",
            opt4: "The body Section or head section",
            ans: "1/(1+2a)"
        },
        {
            id: 3,
            quest: "Select of following statement holds True value ",
            opt1: "typeof([1])==typeof('1')",
            opt2: "typeof([1])==typeof({val:1})",
            opt3: "[1,2,3,4,5]==='1,2,3,4,5'",
            opt4: "None of the above",
            ans: "typeof([1,2,3,4,5])==typeof({Name:'Quiz-App',questions:10})"
        },
        {
            id: 4,
            quest: "Which of the following statements correctly define Hoisting",
            opt1: "Variable are declared at top of JS file",
            opt2: "Variable are considered to be declared to at top of JS file",
            opt3: "Variable are considered to be globally declared",
            opt4: "Variable could be accessed before defining or declaring",
            ans: "Variable could be accessed before defining or declaring"
        },
        {
            id: 5,
            quest: "How can you detect the client's browser name?",
            opt1: "navigator.appName",
            opt2: "browser.name",
            opt3: "client.navName",
            opt4: "Cannot detect",
            ans: "navigator.appName"
        },
        {
            id: 6,
            quest: "What will the following code return: Boolean(10 > 9)",
            opt1: "NaN",
            opt2: "false",
            opt3: "True",
            opt4: "true",
            ans: "true"
        },
        {
            id: 7,
            quest: "The purpose of 'use strict' is to",
            opt1: "Indicate that the code should be executed in 'strict mode'",
            opt2: "Use Undeclared Variable",
            opt3: "Secure code from being Inspected",
            opt4: "Use library named script",
            ans: "Indicate that the code should be executed in 'strict mode'"
        },
        {
            id: 8,
            quest: "Select corrrect statement: ",
            opt1: "10=='10' holds true value",
            opt2: "10!='10' holds true value",
            opt3: "10==='10' holds true value",
            opt4: "None of the above holds true value",
            ans: "10=='10' holds true value"
        },
        {
            id: 9,
            quest: "Select corrrect statement: ",
            opt1: "var always have block scope",
            opt2: "let always have block scope",
            opt3: "const always have global scope",
            opt4: "const always have block scope",
            ans: "let always have block scope"
        },
        {
            id: 10,
            quest: "console.log(10+5+'7'+8) will gives ____ at console",
            opt1: "10578",
            opt2: "30",
            opt3: "1578",
            opt4: "237",
            ans: "1578"
        }
    ]
}