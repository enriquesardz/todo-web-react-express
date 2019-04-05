export const defaultState = {
  users: [
    {
      id: "U1",
      name: "Dev"
    },
    {
      id: "U2",
      name: "Dev 2"
    },
    {
      id: "U3",
      name: "Dev 3"
    }
  ],
  groups: [
    {
      name: "Group 1",
      id: "G1",
      owner: "U1"
    },
    {
      name: "Group 2",
      id: "G2",
      owner: "U2"
    },
    {
      name: "Group 3",
      id: "G3",
      owner: "U3"
    }
  ],
  tasks: [
    {
      name: "Do task 1",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false
    },
    {
      name: "Do task 2",
      id: "T2",
      group: "G1",
      owner: "U2",
      isComplete: true
    },
    {
      name: "Do task 3",
      id: "T3",
      group: "G1",
      owner: "U3",
      isComplete: false
    },
    {
      name: "Do task 1",
      id: "T4",
      group: "G2",
      owner: "U1",
      isComplete: true
    },
    {
      name: "Do task 2",
      id: "T5",
      group: "G2",
      owner: "U2",
      isComplete: false
    },
    {
      name: "Do task 1",
      id: "T6",
      group: "G3",
      owner: "U1",
      isComplete: true
    }
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "Comment 1 :)"
    },
    {
      owner: "U2",
      id: "C2",
      task: "T3",
      content: "Comment 2 :)"
    },
    {
      owner: "U3",
      id: "C3",
      task: "T5",
      content: "Comment 3 :)"
    }
  ]
};
