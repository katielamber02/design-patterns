class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership, //refs to classes
    standard: StandardMembership, //refs to classes
    premium: PremiumMembership //refs to classes
  };
  create(name, type = "simple") {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    // if no list we will set MemberFactory.list.simple be default
    const member = new Membership(name);
    member.type = type;
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };
    return member;
  }
}

const factory = new MemberFactory();

const members = [
  factory.create("Vladilen", "simple"),
  factory.create("Elena", "premium"),
  factory.create("Vasilisa", "standard"),
  factory.create("Ivan", "premium"),
  factory.create("Petr")
];

members.forEach(m => {
  m.define();
});

// Vladilen (simple): 50
//  Elena (premium): 500
//  Vasilisa (standard): 150
//  Ivan (premium): 500
//  Petr (simple): 50
