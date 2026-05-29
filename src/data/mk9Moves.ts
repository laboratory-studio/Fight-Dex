import type { CharacterMoves } from '../types';

// Button tokens map to display labels per layout
// Input strings use abbreviations: B, F, D, Up, FP, BP, FK, BK, FS, BL, +
// These are kept as raw tokens and rendered by the InputDisplay component

const mk9Moves: Record<string, CharacterMoves> = {
  scorpion: {
    characterId: 'scorpion',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Spear', input: ['B', 'B', 'FP'], notes: '3%, E: 7%' },
          { name: 'Demon Fire', input: ['D', 'B', 'BP'], notes: '7%, Unblockable, E: 8%' },
          { name: 'Teleport', input: ['D', 'B', 'FK'], notes: '9%, Can be done in the air' },
          { name: 'Takedown', input: ['D', 'B', 'BK'], notes: '2 Hits, 10%' },
          { name: 'Air Throw', input: ['Throw'], notes: '2 Hits, 8%, Anti-Air, While in the air' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Scorpion Sting', input: ['FS', '+', 'BL'], notes: '3 Hits, 30%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Torment', input: ['FP', 'FP', 'FP'], notes: '3 Hits, 12%' },
          { name: 'Damnation', input: ['FP', 'FP', 'BK'], notes: '3 Hits, 12%' },
          { name: 'Brimstone', input: ['BP', 'FP', 'BP'], notes: '3 Hits, 15%' },
          { name: 'Gravedigger', input: ['BP', 'FP+BP'], notes: '2 Hits, 9%' },
          { name: 'Doom Blade', input: ['F+BP', 'FP', 'BK'], notes: '3 Hits, 15%' },
          { name: 'Dead End', input: ['FK', 'FK', 'BK'], notes: '3 Hits, 13%' },
          { name: 'Grievance', input: ['F+BK', 'FK'], notes: '2 Hits, 9%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Split Decision', input: ['F', 'D', 'F', 'BP'], notes: 'Touching' },
          { name: 'Nether Gate', input: ['B', 'F', 'B', 'FK'], notes: 'Touching' },
          { name: 'Toasty (Klassic)', input: ['D', 'Up', 'Up', 'BP'], notes: 'Jump' },
          { name: 'Babality', input: ['D', 'B', 'F', 'D', 'BP'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['F', 'Up', 'Up', 'FP'], notes: 'Varies' },
        ],
      },
    ],
  },
  liukang: {
    characterId: 'liukang',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'High Fireball', input: ['B', 'F', 'FP'], notes: '7%, Can be done in the air' },
          { name: 'Low Fireball', input: ['B', 'F', 'FK'], notes: '7%, E: 11%' },
          { name: 'Flying Kick', input: ['B', 'F', 'BP'], notes: '7%, E: 13%' },
          { name: 'Bicycle Kick', input: ['B', 'B', 'F', 'BK'], notes: '6 Hits, 14%' },
          { name: 'Burning Parry', input: ['D', 'B', 'FP'], notes: '8% Unblockable' },
          { name: 'Dragon Stance', input: ['D', 'B', 'BP'], notes: 'Stance for 4 Attacks' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Chin Up', input: ['FS', '+', 'BL'], notes: '4 Hits, 30%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Three Fists', input: ['FP', 'FP', 'FP'], notes: '3 Hits, 9%' },
          { name: 'Death Fist', input: ['FP', 'FP', 'BP'], notes: '3 Hits, 11%' },
          { name: 'Immortal Dragon', input: ['FP', 'BP', 'B+FP'], notes: '3 Hits, 9%' },
          { name: 'Blazing Blasts', input: ['F+FP', 'BP', 'FP'], notes: '3 Hits, 14%' },
          { name: 'Fierce Tiger', input: ['BP', 'FP', 'FK'], notes: '3 Hits, 12%, Pop-Up' },
          { name: 'Showdown', input: ['F+BP', 'BK'], notes: '2 Hits, 11%' },
          { name: 'Launching Fury', input: ['B+BP', 'B+FK'], notes: '2 Hits, 9%' },
          { name: 'Lotus Flurry', input: ['FK', 'FK', 'BK'], notes: '3 Hits, 13%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Fist Of Flame', input: ['F', 'B', 'D', 'D', 'FK'], notes: 'Sweep' },
          { name: 'The Beast Within', input: ['D', 'D', 'F', 'D', 'BK'], notes: 'Jump' },
          { name: 'Babality', input: ['D', 'D', 'D', 'BK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'F', 'B', 'FK'], notes: 'Varies' },
        ],
      },
    ],
  },
  kunglao: {
    characterId: 'kunglao',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Hat Toss', input: ['B', 'F', 'BP'], notes: '7%, E: 10%' },
          { name: 'Ground Hat', input: ['D', 'B', 'BP'], notes: '7%, E: 9%' },
          { name: 'Spin', input: ['D', 'F', 'FP'], notes: '5%, Pop-Up, E: 3 Hits' },
          { name: 'Dive Kick', input: ['D+BK'], notes: '6%, While in the air' },
          { name: 'Teleport', input: ['D', 'Up'], notes: 'Can be done in the air' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Fist Of Shaolin', input: ['FS', '+', 'BL'], notes: '4 Hits, 31%, Touching' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Windy Palm', input: ['FP', 'FP', 'BP', 'FP'], notes: '4 Hits, 10%' },
          { name: 'Healing Wind', input: ['B+FP', 'F+FP'], notes: '4 Hits, 13%' },
          { name: 'Chained Fist', input: ['BP', 'FP', 'BP', 'FP', 'BP'], notes: '7 Hits, 17%, Rapidly' },
          { name: 'Iron Broom', input: ['BP', 'BK', 'FP+BP'], notes: '3 Hits, 15%' },
          { name: 'Lead The Way', input: ['B+FK', 'FK', 'FK'], notes: '3 Hits, 9%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Hat Trick', input: ['B', 'F', 'F', 'B', 'BP'], notes: 'Sweep' },
          { name: "Razor's Edge", input: ['D', 'D', 'F', 'B', 'FP'], notes: 'Sweep' },
          { name: 'Babality', input: ['D', 'F', 'D', 'BP'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'F', 'D', 'FK'], notes: 'Varies' },
        ],
      },
    ],
  },
  subzero: {
    characterId: 'subzero',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Iceball', input: ['D', 'F', 'FK'], notes: '2 Hits, 5%' },
          { name: 'Slide', input: ['B', 'F', 'BK'], notes: '9%, E: 2 Hits, 12%' },
          { name: 'Ice Clone', input: ['D', 'B', 'FP'], notes: 'Unblockable' },
          { name: 'Ice Puddle', input: ['D', 'B', 'FK'], notes: 'Unblockable' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Deep Freeze', input: ['FS', '+', 'BL'], notes: '3 Hits, 33%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Frosty', input: ['FP', 'FP'], notes: '2 Hits, 7%' },
          { name: 'Cold Feel', input: ['FP', 'FK', 'F+BK'], notes: '3 Hits, 15%' },
          { name: 'Arctic Blast', input: ['FP', 'FK', 'B+BK'], notes: '3 Hits, 14%' },
          { name: 'Ice Pick', input: ['B+FP', 'BP', 'FP'], notes: '3 Hits, 20%' },
          { name: 'Frost Bitten', input: ['BP', 'FP', 'BP'], notes: '3 Hits, 16%' },
          { name: 'Winter Blade', input: ['BP', 'BP', 'BP'], notes: '3 Hits, 14%' },
          { name: 'Chill Out', input: ['FK', 'F+BK'], notes: '2 Hits, 11%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Have an Ice Day', input: ['B', 'F', 'D', 'F', 'BK'], notes: 'Sweep' },
          { name: 'Spinal Smash', input: ['D', 'B', 'D', 'F', 'BP'], notes: 'Sweep' },
          { name: 'Babality', input: ['D', 'B', 'D', 'BK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['F', 'D', 'B', 'BP'], notes: 'Varies' },
        ],
      },
    ],
  },
  sindel: {
    characterId: 'sindel',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Fireball', input: ['D', 'F', 'FP'], notes: '8%, Can be done in the air' },
          { name: 'Low Fireball', input: ['D', 'F', 'FK'], notes: '8%, Can be done in the air' },
          { name: 'Yell', input: ['D', 'B', 'BP'], notes: '1%, Opponent confused' },
          { name: 'Levitate', input: ['D', 'D', 'Up'], notes: 'BL to stop' },
          { name: 'Hair Whip', input: ['D', 'F', 'BP'], notes: '2 Hits, 11%' },
          { name: 'Step Up', input: ['D', 'F', 'BK'], notes: '3 Hits, 10%' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Queen B', input: ['FS', '+', 'BL'], notes: '4 Hits, 31%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Undead Bride', input: ['FP', 'FP', 'FP'], notes: '3 Hits, 9%' },
          { name: 'Royal Pain', input: ['FP', 'FP', 'B+BP', 'BK'], notes: '4 Hits, 11%' },
          { name: 'Rebirth', input: ['B+FP', 'BP'], notes: '2 Hits, 7%, Pop-Up' },
          { name: "Queen's Anger", input: ['FK', 'FP', 'FP'], notes: '3 Hits, 15%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Migraine', input: ['B', 'F', 'D', 'F', 'FP'], notes: 'Sweep' },
          { name: 'Mouthful', input: ['B', 'F', 'Up', 'BP'], notes: 'Sweep' },
          { name: 'Babality', input: ['D', 'D', 'D', 'Up'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'D', 'D', 'FP'], notes: 'Varies' },
        ],
      },
    ],
  },
  ermac: {
    characterId: 'ermac',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Force Ball', input: ['D', 'B', 'BP'], notes: '8%, E: 2 Hits, 10%' },
          { name: 'Force Port', input: ['D', 'B', 'BK'], notes: '8%, Can be done in the air' },
          { name: 'Force Lift', input: ['D', 'B', 'FP'], notes: 'Lifts opponent' },
          { name: 'Hover Slam', input: ['D', 'D', 'Up'], notes: 'Hold BL to delay' },
          { name: 'Force Push', input: ['B', 'F', 'FP'], notes: '2 Hits, 5%, Pop-Up' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Cannonball Slam', input: ['FS', '+', 'BL'], notes: '3 Hits, 35%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Ermac Rush', input: ['FP', 'BP', 'FP'], notes: '3 Hits, 10%' },
          { name: 'Mysterious Mash', input: ['F+FP', 'FP', 'BK'], notes: '3 Hits, 12%' },
          { name: 'We Win', input: ['B+FP', 'BP', 'F+FP'], notes: '4 Hits, 15%' },
          { name: 'Nether Pain', input: ['BP', 'BP'], notes: '2 Hits, 11%' },
          { name: 'Surrender', input: ['FK', 'FP', 'BP'], notes: '3 Hits, 14%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Mind Over Splatter', input: ['D', 'Up', 'D', 'D', 'BL'], notes: 'Jump' },
          { name: 'Pest Control', input: ['F', 'B', 'F', 'D', 'BK'], notes: 'Jump' },
          { name: 'Babality', input: ['D', 'D', 'B', 'D', 'BP'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'Up', 'D', 'D', 'FK'], notes: 'Varies' },
        ],
      },
    ],
  },
  reptile: {
    characterId: 'reptile',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Slow Force Ball', input: ['B', 'B', 'FP'], notes: '5%, Pop-Up' },
          { name: 'Fast Force Ball', input: ['B', 'B', 'FK'], notes: '8%, Pop-Up' },
          { name: 'Slide', input: ['B', 'F', 'BK'], notes: '8%, E: 3 Hits' },
          { name: 'Acid Hand', input: ['D', 'B', 'BP'], notes: '11%, Pop-Up' },
          { name: 'Invisibility', input: ['B', 'Up', 'BK'], notes: 'Vanish' },
          { name: 'Acid Spit', input: ['D', 'F', 'FP'], notes: '8%, E: 12%' },
          { name: 'Elbow Dash', input: ['B', 'F', 'BP'], notes: '2 Hits, 11%, Corner Pop-Up' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Tricky Lizard', input: ['FS', '+', 'BL'], notes: '4 Hits, 33%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Cold Blooded', input: ['FP', 'BP', 'BK'], notes: '3 Hits, 7%' },
          { name: 'Carnivore Bash', input: ['FP', 'BP', 'BP', 'FP'], notes: '4 Hits, 11%, Pop-Up' },
          { name: 'Deadly Venom', input: ['FP', 'BP', 'B+FP'], notes: '3 Hits, 9%' },
          { name: 'Evolution', input: ['F+BP', 'B+FP'], notes: '2 Hits, 7%, Corner Pop-Up' },
          { name: 'Amphibian Charge', input: ['FK', 'BP', 'FP'], notes: '3 Hits, 13%, Corner Pop-Up' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Acid Yak', input: ['F', 'F', 'D', 'Up', 'FK'], notes: 'Sweep' },
          { name: 'Weight Loss', input: ['D', 'D', 'F', 'B', 'FP'], notes: 'Sweep' },
          { name: 'Babality', input: ['B', 'F', 'B', 'D', 'FK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['F', 'D', 'D', 'BL'], notes: 'Varies' },
        ],
      },
    ],
  },
  kitana: {
    characterId: 'kitana',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Fan Toss', input: ['D', 'F', 'FP'], notes: '2 Hits, 7%, E: 11%' },
          { name: 'Uprise', input: ['B', 'B', 'BP'], notes: 'Pop-Up' },
          { name: 'Cutting Fan', input: ['D', 'F', 'BP'], notes: '2 Hits, 9%' },
          { name: 'Square Boost', input: ['D', 'B', 'FP'], notes: '13%, Can be done in the air' },
          { name: 'Pretty Kick', input: ['D', 'B', 'FK'], notes: '2 Hits, 10%' },
          { name: 'Fake Out Kick', input: ['D', 'B', 'BK'], notes: '8%' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Fan Tastic', input: ['FS', '+', 'BL'], notes: '4 Hits, 31%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Royal Pain', input: ['FP', 'FP', 'BP'], notes: '3 Hits, 12%' },
          { name: 'Majestic', input: ['BP', 'FP', 'BP'], notes: '3 Hits, 14%' },
          { name: 'Noble Lift', input: ['F+BP', 'FP'], notes: '2 Hits, 11%, Pop-Up' },
          { name: 'Regal Assault', input: ['FK', 'FK', 'FK'], notes: '3 Hits, 14%' },
          { name: 'Deadly Rush', input: ['F+BK', 'FP'], notes: '3 Hits, 15%, Pop-Up' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Fan Opener', input: ['D', 'D', 'B', 'F', 'BP'], notes: 'Touching' },
          { name: 'Splitting Headache', input: ['B', 'D', 'F', 'F', 'FK'], notes: 'Sweep' },
          { name: 'Babality', input: ['F', 'F', 'D', 'F', 'BK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['F', 'D', 'D', 'FK'], notes: 'Varies' },
        ],
      },
    ],
  },
  johnnycage: {
    characterId: 'johnnycage',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Low Forceball', input: ['D', 'F', 'BP'], notes: '8%, E: 2 Hits' },
          { name: 'High Forceball', input: ['D', 'B', 'BP'], notes: '8%, E: 2 Hits' },
          { name: 'Flipkick', input: ['D', 'B', 'FK'], notes: '9%, Anti-Air' },
          { name: 'Shadow Kick', input: ['B', 'F+BK'], notes: '8%, E: 12%' },
          { name: 'Nut Punch', input: ['B', 'D+FP'], notes: '11%, E: 15%' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Ball Buster', input: ['FS', '+', 'BL'], notes: '4 Hits, 37%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Out Take', input: ['FP', 'FP', 'FP'], notes: '3 Hits, 10%' },
          { name: 'Showtime', input: ['FP', 'FP', 'F+FP'], notes: '3 Hits, 12%' },
          { name: 'Stand In', input: ['FP', 'FP', 'BK'], notes: '3 Hits, 13%' },
          { name: 'Widescreen', input: ['BP', 'FP', 'F+BP'], notes: '3 Hits, 15%, Corner Pop-Up' },
          { name: 'Money Shot', input: ['BK', 'BK'], notes: '3 Hits, 11%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Heads Up!', input: ['F', 'F', 'B', 'D', 'FK'], notes: 'Touching' },
          { name: 'And the Winner is...', input: ['D', 'F', 'D', 'F', 'BK'], notes: 'Sweep' },
          { name: 'Babality', input: ['F', 'B', 'F', 'BK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'B', 'F', 'BL'], notes: 'Varies' },
        ],
      },
    ],
  },
  jade: {
    characterId: 'jade',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Boomerang', input: ['D', 'F', 'FP'], notes: '8%, E: 2 Hits' },
          { name: 'Boomerang Up', input: ['D', 'B', 'FP'], notes: '8%, E: 2 Hits' },
          { name: 'Boomerang Down', input: ['D', 'F', 'FK'], notes: '8%, E: 2 Hits' },
          { name: 'Shadow Kick', input: ['D', 'F', 'BK'], notes: '6%, Pop-Up' },
          { name: 'Shadow Flash', input: ['B', 'F', 'FK'], notes: 'Projectile immunity' },
          { name: 'Staff Overhead', input: ['D', 'B', 'BP'], notes: '8%, Pop-Up' },
          { name: 'Staff Grab', input: ['D', 'F', 'BP'], notes: '2 Hits, 8%' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Staff Buster', input: ['FS', '+', 'BL'], notes: '3 Hits, 35%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Pole Check', input: ['FP', 'BP', 'BP'], notes: '3 Hits, 10%' },
          { name: 'Bad Girl', input: ['BP', 'FK', 'F+BP'], notes: '3 Hits, 14%' },
          { name: 'Betrayal', input: ['FK', 'BK', 'BP'], notes: '3 Hits, 16%, Pop-Up' },
          { name: 'Polecat', input: ['BK', 'F+FK'], notes: '2 Hits, 13%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Head a Rang', input: ['Up', 'Up', 'D', 'F', 'FP'], notes: 'Fullscreen' },
          { name: 'Half Mast', input: ['B', 'D', 'B', 'D', 'BK'], notes: 'Sweep' },
          { name: 'Babality', input: ['D', 'D', 'F', 'D', 'BK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['B', 'F', 'D', 'BL'], notes: 'Varies' },
        ],
      },
    ],
  },
  mileena: {
    characterId: 'mileena',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Sai Blast', input: ['B', 'F', 'FP'], notes: '6%, Can be done in air' },
          { name: 'Teleport Drop', input: ['F', 'F', 'FK'], notes: '7%, Can be done in air' },
          { name: 'Leaping Neckbite', input: ['B', 'F', 'BP'], notes: '5 Hits, 7%' },
          { name: 'Ball Roll', input: ['B', 'D', 'BK'], notes: '5%, E: 4 Hits' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Femme Fatale', input: ['FS', '+', 'BL'], notes: '7 Hits, 33%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Smacked Around', input: ['FP', 'FP', 'BP'], notes: '3 Hits, 11%' },
          { name: 'Boot Down', input: ['B+FP', 'BK'], notes: '2 Hits, 11%, Pop-Up' },
          { name: 'Bones', input: ['BP', 'FK', 'BK'], notes: '3 Hits, 14%' },
          { name: 'Killer Heels', input: ['FK', 'BK'], notes: '2 Hits, 9%' },
          { name: 'Friendly Kiss', input: ['BK', 'BP'], notes: '2 Hits, 11%, Pop-Up' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Be Mine', input: ['B', 'F', 'B', 'F', 'BP'], notes: 'Jump' },
          { name: 'Rip Off', input: ['B', 'F', 'B', 'D', 'FK'], notes: 'Jump' },
          { name: 'Babality', input: ['D', 'D', 'F', 'B', 'BP'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'D', 'D', 'FP'], notes: 'Varies' },
        ],
      },
    ],
  },
  nightwolf: {
    characterId: 'nightwolf',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Shoulder Charge', input: ['F', 'F', 'BK'], notes: '9%, E: 2 Hits' },
          { name: 'Lightning', input: ['D', 'B', 'FK'], notes: '8%, Unblockable' },
          { name: 'Arrow Shot', input: ['D', 'B', 'FP'], notes: '6%, E: Up to 3 Hits' },
          { name: 'Reflect', input: ['D', 'B', 'BP'], notes: 'Reflects projectiles' },
          { name: 'Axe Swing', input: ['D', 'F', 'FP'], notes: '5%, Pop-Up' },
          { name: 'Choke', input: ['D', 'F', 'BP'], notes: '2 Hits, 12%' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: "Ancestors' Call", input: ['FS', '+', 'BL'], notes: '3 Hits, 34%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Blade and Edge', input: ['FP', 'FP', 'BP'], notes: '3 Hits, 12%' },
          { name: 'Axe Blast', input: ['FP', 'BP', 'BP', 'FP'], notes: '4 Hits, 16%' },
          { name: 'New Earth', input: ['BP', 'FK', 'BK'], notes: '3 Hits, 15%' },
          { name: 'Tomahawk Smash', input: ['B+BP', 'BP', 'FP'], notes: '3 Hits, 18%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Little Off The Top', input: ['D', 'F', 'D', 'B', 'BK'], notes: 'Sweep' },
          { name: 'Ascension', input: ['D', 'D', 'F', 'B', 'FP'], notes: 'Sweep' },
          { name: 'Babality', input: ['F', 'B', 'F', 'B', 'FP'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'D', 'D', 'BL'], notes: 'Varies' },
        ],
      },
    ],
  },
  cyrax: {
    characterId: 'cyrax',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Bomb Close', input: ['B', 'B', 'BK'], notes: '8%, Unblockable, Pop-Up' },
          { name: 'Bomb Medium', input: ['F', 'F', 'BK'], notes: '8%, Unblockable, Pop-Up' },
          { name: 'Bomb Far', input: ['B', 'B', 'F', 'BK'], notes: '8%, Unblockable' },
          { name: 'Net', input: ['B', 'B', 'FK'], notes: 'Traps Opponent' },
          { name: 'Teleport', input: ['D', 'B', 'FP'], notes: 'Can be done in air' },
          { name: 'Buzzsaw', input: ['B', 'F', 'BP'], notes: '8%, E: 2 Hits' },
          { name: 'Reverse Kick', input: ['D', 'F', 'FK'], notes: '7%, E: 2 Hits' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Cyberdriver', input: ['FS', '+', 'BL'], notes: '3 Hits, 30%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'See Saw', input: ['FP', 'FP', 'FP'], notes: '3 Hits, 12%' },
          { name: 'Steel Fists', input: ['FP', 'BP', 'FP'], notes: '3 Hits, 15%' },
          { name: 'Power Plant', input: ['FP', 'BP', 'FK'], notes: '3 Hits, 14%, Pop-Up' },
          { name: 'Mustard', input: ['BP', 'FP', 'BP'], notes: '3 Hits, 18%' },
          { name: 'Kombat Boots', input: ['FK', 'FK', 'BK'], notes: '3 Hits, 14%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Buzz Kill', input: ['F', 'D', 'F', 'B', 'BP'], notes: 'Touching' },
          { name: 'Nothing But Net', input: ['B', 'D', 'B', 'F', 'FP'], notes: 'Jump' },
          { name: 'Babality', input: ['D', 'F', 'B', 'BP'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'Up', 'BL'], notes: 'Varies' },
        ],
      },
    ],
  },
  noobsaibot: {
    characterId: 'noobsaibot',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Ghostball', input: ['D', 'F', 'FP'], notes: 'Blocking Disabled' },
          { name: 'Blackhole Above', input: ['D', 'B', 'BP'], notes: '3%, Unblockable' },
          { name: 'Blackhole Behind', input: ['D', 'F', 'BP'], notes: '3%, Unblockable' },
          { name: 'Teleport Slam', input: ['D', 'Up'], notes: '2 Hits, 10%, Can be done in air' },
          { name: 'Shadow Charge', input: ['D', 'F', 'FK'], notes: '8%, E: 2 Hits' },
          { name: 'Shadow Upknee', input: ['D', 'B', 'FK'], notes: '6%, Anti-Air' },
          { name: 'Shadow Slide', input: ['B', 'F', 'BK'], notes: '7%, E: 10%' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Together Again', input: ['FS', '+', 'BL'], notes: '3 Hits, 36%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Saibot Blast', input: ['FP', 'BP'], notes: '2 Hits, 9%' },
          { name: 'Sneaky Saibot', input: ['B+FP', 'BP', 'F+BK'], notes: '3 Hits, 13%' },
          { name: 'Assassinate', input: ['BP', 'FP', 'BP'], notes: '3 Hits, 12%' },
          { name: 'No Compassion', input: ['B+BP', 'FP', 'BK'], notes: '3 Hits, 13%' },
          { name: 'Reincarnated', input: ['F+FK', 'FK', 'FK'], notes: '3 Hits, 14%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Make A Wish', input: ['B', 'F', 'B', 'D', 'BK'], notes: 'Jump' },
          { name: 'As One', input: ['D', 'D', 'B', 'D', 'BL'], notes: 'Jump' },
          { name: 'Babality', input: ['F', 'Up', 'F', 'FP'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['F', 'D', 'F', 'BL'], notes: 'Varies' },
        ],
      },
    ],
  },
  smoke: {
    characterId: 'smoke',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Shake', input: ['B', 'F', 'FP'], notes: '2 Hits, 9%, Unblockable' },
          { name: 'Smoke Cloud', input: ['D', 'B', 'BP'], notes: '6%, Pop-Up' },
          { name: 'Air Throw', input: ['Throw'], notes: '8%, Unblockable, While in the air' },
          { name: 'Teleport', input: ['D', 'B', 'BK'], notes: '2 Hits, 9%, Can be done in air' },
          { name: 'Invisibility', input: ['D', 'Up', 'FK'], notes: 'Vanish' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Burn Out', input: ['FS', '+', 'BL'], notes: '3 Hits, 34%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Ablaze', input: ['FP', 'FP', 'BP'], notes: '3 Hits, 12%' },
          { name: 'Smoldering', input: ['FP', 'FK'], notes: '2 Hits, 7%' },
          { name: 'Red-Hot', input: ['B+FP', 'BK'], notes: '2 Hits, 11%' },
          { name: 'Rekindle', input: ['BP', 'FP', 'BK'], notes: '3 Hits, 12%' },
          { name: 'Combustion', input: ['FK', 'D+FP', 'BP'], notes: '3 Hits, 14%, Pop-Up' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Smoked Out', input: ['B', 'F', 'B', 'F', 'FP'], notes: 'Sweep' },
          { name: 'Tremor', input: ['B', 'B', 'D', 'F', 'BP'], notes: 'Sweep' },
          { name: 'Babality', input: ['D', 'B', 'D', 'F', 'D'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['F', 'Up', 'Up', 'FP'], notes: 'Varies' },
        ],
      },
    ],
  },
  sektor: {
    characterId: 'sektor',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Flame Burner', input: ['B', 'F', 'BP'], notes: '8%, E: 12%' },
          { name: 'Teleport', input: ['D', 'F', 'BK'], notes: '6%, E: 2 Hits' },
          { name: 'Straight Missile', input: ['B', 'F', 'FP'], notes: '8%, E: 13%' },
          { name: 'Up Missile Above', input: ['D', 'B', 'FK'], notes: '8%, E: Tracks Opponent' },
          { name: 'Up Missile Behind', input: ['D', 'B', 'F', 'FK'], notes: '8%' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Massive Missile', input: ['FS', '+', 'BL'], notes: '3 Hits, 32%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Artificial Intelligence', input: ['FP', 'FP', 'B+FP'], notes: '3 Hits, 13%' },
          { name: 'System Overload', input: ['FP', 'BP', 'B+FP'], notes: '3 Hits, 13%, Pop-Up' },
          { name: 'Hard Crash', input: ['FP', 'BP', 'BP'], notes: '3 Hits, 17%' },
          { name: 'Demolition', input: ['BP', 'FP', 'BK'], notes: '3 Hits, 14%' },
          { name: 'Drive Power', input: ['B+BP', 'FP'], notes: '2 Hits, 15%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Robo-Sek', input: ['F', 'D', 'B', 'F', 'FK'], notes: 'Fullscreen' },
          { name: 'The Scarecrow', input: ['D', 'D', 'F', 'B', 'FP'], notes: 'Fullscreen' },
          { name: 'Babality', input: ['B', 'D', 'D', 'D', 'BK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'F', 'D', 'BL'], notes: 'Varies' },
        ],
      },
    ],
  },
  sonya: {
    characterId: 'sonya',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Energy Ring Blast', input: ['B', 'F', 'BP'], notes: '8%, E: 2 Hits' },
          { name: 'Leg Grab', input: ['B', 'F', 'BK'], notes: '2 Hits, 13%' },
          { name: 'Deadly Kiss', input: ['D', 'B', 'FP'], notes: '1%' },
          { name: 'Arc Kick', input: ['D', 'B', 'BK'], notes: 'Anti-Air' },
          { name: 'Kartwheel', input: ['D', 'F', 'FK'], notes: '9%, E: 11%' },
          { name: 'Air Drop', input: ['D+BK'], notes: '7%, While in the air' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'SF Beat Down', input: ['FS', '+', 'BL'], notes: '11 Hits, 33%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Advance Force', input: ['FP', 'FP', 'BP'], notes: '3 Hits, 12%' },
          { name: 'Drop Zone', input: ['BP', 'FP', 'B+FK'], notes: '3 Hits, 16%' },
          { name: 'Power Rush', input: ['F+BP', 'BP', 'BK'], notes: '3 Hits, 15%' },
          { name: 'Play Time', input: ['FK', 'FP', 'BP'], notes: '3 Hits, 13%' },
          { name: 'Pull Out', input: ['BK', 'BK'], notes: '2 Hits, 7%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Scissor Split', input: ['D', 'D', 'B', 'F', 'FP'], notes: 'Jump' },
          { name: 'Kut Throat', input: ['D', 'B', 'F', 'B', 'BK'], notes: 'Sweep' },
          { name: 'Babality', input: ['D', 'D', 'F', 'FK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['B', 'F', 'D', 'BP'], notes: 'Varies' },
        ],
      },
    ],
  },
  jax: {
    characterId: 'jax',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Energy Wave', input: ['D', 'B', 'BP'], notes: '7%, E: 2 Hits' },
          { name: 'Dash Punch', input: ['D', 'F', 'BP'], notes: '9%, E: 2 Hits' },
          { name: 'Ground Pound Close', input: ['D', 'B', 'FK'], notes: '8%, Unblockable, Pop-Up' },
          { name: 'Ground Pound Medium', input: ['D', 'F', 'FK'], notes: '11%, Unblockable, Pop-Up' },
          { name: 'Gotcha Grab', input: ['D', 'F', 'FP'], notes: '3 Hits, 11%, Touching' },
          { name: 'Air Gotcha Grab', input: ['D', 'B', 'FP'], notes: '2 Hits, 12%, Anti-Air' },
          { name: 'Overhead Smash', input: ['D', 'Up', 'BK'], notes: '12%, Close' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Briggs Bash', input: ['FS', '+', 'BL'], notes: '4 Hits, 41%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Major Force', input: ['FP', 'BP', 'FK'], notes: '3 Hits, 17%' },
          { name: 'Boot Kamp', input: ['B+FP', 'BP', 'BK'], notes: '3 Hits, 15%' },
          { name: 'Active Duty', input: ['BP', 'FP'], notes: '2 Hits, 9%' },
          { name: 'Chain Of Command', input: ['BP', 'F+BP', 'B+FP'], notes: '3 Hits, 15%' },
          { name: 'Advance Force', input: ['F+BK', 'FP', 'FK'], notes: '3 Hits, 14%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Smash And Grab', input: ['B', 'F', 'F', 'B', 'BP'], notes: 'Touching' },
          { name: 'Three Points', input: ['F', 'F', 'B', 'D', 'FK'], notes: 'Sweep' },
          { name: 'Babality', input: ['D', 'D', 'D', 'FK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'F', 'D', 'FP'], notes: 'Varies' },
        ],
      },
    ],
  },
  kano: {
    characterId: 'kano',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Kano Ball', input: ['F', 'D', 'B', 'F'], notes: '11%, Hold BL to delay' },
          { name: 'Up Ball', input: ['D', 'F', 'BP'], notes: '11%, Anti Air' },
          { name: 'Kano Choke', input: ['D', 'F', 'FP'], notes: '8%, Touching' },
          { name: 'Knife Throw', input: ['D', 'B', 'BP'], notes: '9%, E: 14%' },
          { name: 'Air Throw', input: ['Throw'], notes: '9%, Unblockable, While in the air' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Just The Tip', input: ['FS', '+', 'BL'], notes: '4 Hits, 41%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'One Two Three', input: ['FP', 'FP', 'BP'], notes: '3 Hits, 11%' },
          { name: "Dragon's Tail", input: ['B+FP', 'FP', 'BP'], notes: '3 Hits, 14%' },
          { name: 'Getting Ahead', input: ['BP', 'FP', 'BP'], notes: '3 Hits, 10%' },
          { name: 'Double Dragon', input: ['FK', 'FK'], notes: '2 Hits, 11%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Heartbreak', input: ['B', 'D', 'B', 'F', 'FP'], notes: 'Sweep' },
          { name: 'Eat Your Heart Out', input: ['D', 'D', 'F', 'B', 'BK'], notes: 'Sweep' },
          { name: 'Babality', input: ['F', 'D', 'D', 'FK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['Up', 'Up', 'B', 'FK'], notes: 'Varies' },
        ],
      },
    ],
  },
  stryker: {
    characterId: 'stryker',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Baton Sweep', input: ['D', 'B', 'BK'], notes: '6%, E: 2 Hits' },
          { name: 'High Grenade', input: ['D', 'B', 'BP'], notes: '9%, E: 2 Hits' },
          { name: 'Low Grenade', input: ['D', 'B', 'FP'], notes: '9%, E: 2 Hits' },
          { name: 'Gun Shot', input: ['B', 'F', 'FP'], notes: '2 Hits, 6%' },
          { name: 'Roll Toss', input: ['B', 'F', 'BK'], notes: '2 Hits, 12%' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Busted', input: ['FS', '+', 'BL'], notes: '4 Hits, 38%, Touching' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Kop Out', input: ['FP', 'BP'], notes: '2 Hits, 9%' },
          { name: 'Dispatched', input: ['FP', 'FP', 'BK'], notes: '3 Hits, 11%' },
          { name: 'Beatdown', input: ['B+FP', 'BP', 'BP'], notes: '3 Hits, 11%, Pop Up' },
          { name: 'Pain Patrol', input: ['BP', 'FK', 'BP'], notes: '3 Hits, 15%' },
          { name: 'Come With Me', input: ['B+FK', 'BP'], notes: '2 Hits, 13%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Time Served', input: ['F', 'D', 'F', 'FK'], notes: 'Sweep' },
          { name: 'Have A Blast', input: ['D', 'F', 'D', 'F', 'BL'], notes: 'Sweep' },
          { name: 'Babality', input: ['D', 'F', 'D', 'B', 'BP'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['F', 'Up', 'Up', 'BK'], notes: 'Varies' },
        ],
      },
    ],
  },
  shangtsung: {
    characterId: 'shangtsung',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Fire Skull', input: ['B', 'B', 'FP'], notes: '9%, E: 3 Hits' },
          { name: 'Up Skull Above', input: ['D', 'Up', 'BP'], notes: '8%, E: 3 Skulls' },
          { name: 'Ground Skull Close', input: ['D', 'Up', 'BK'], notes: '9%, E: Up to 3 Hits' },
          { name: 'Soul Steal', input: ['D', 'B', 'FK'], notes: 'Steals opponent\'s moves' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Your Soul Is Mine', input: ['FS', '+', 'BL'], notes: '3 Hits, 33%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Bad Omen', input: ['FP', 'BP', 'FP'], notes: '3 Hits, 9%' },
          { name: 'Soul Stain', input: ['FP', 'BP', 'BP'], notes: '3 Hits, 9%' },
          { name: 'Reserved Pain', input: ['B+FP', 'BP', 'FP', 'BK'], notes: '4 Hits, 14%' },
          { name: 'Death Walker', input: ['BP', 'BP', 'FP'], notes: '3 Hits, 12%' },
          { name: 'Deadly Truth', input: ['F+BK', 'FK', 'BK'], notes: '3 Hits, 14%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Bang Bang', input: ['B', 'D', 'F', 'FK'], notes: 'Sweep' },
          { name: 'Identity Theft', input: ['D', 'D', 'B', 'D', 'BP'], notes: 'Jump' },
          { name: 'Babality', input: ['D', 'B', 'D', 'FK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['Up', 'Up', 'B', 'FP'], notes: 'Varies' },
        ],
      },
    ],
  },
  baraka: {
    characterId: 'baraka',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Blade Charge', input: ['D', 'F', 'BP'], notes: '8%, E: 13%' },
          { name: 'Spark', input: ['D', 'B', 'BP'], notes: '8%, E: 14%' },
          { name: 'Chop Chop', input: ['B', 'B', 'FP'], notes: '7 Hits, 11%' },
          { name: 'Blade Spin', input: ['D', 'B', 'FK'], notes: '2 Hits, 9%' },
          { name: 'Slices', input: ['D', 'F', 'FP'], notes: '3 Hits, 10%' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Nail And Impale', input: ['FS', '+', 'BL'], notes: '4 Hits, 32%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Tarkatan Rush', input: ['FP', 'BP', 'FP'], notes: '3 Hits, 15%' },
          { name: 'Painful Swipes', input: ['FP', 'BP', 'BP'], notes: '3 Hits, 14%' },
          { name: 'CutEm Loose', input: ['B+FP', 'FP'], notes: '2 Hits, 13%' },
          { name: 'Cold Steel', input: ['BP', 'FP', 'BP'], notes: '3 Hits, 15%' },
          { name: 'Horror Show', input: ['F+BP', 'BK'], notes: '2 Hits, 15%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Up The Middle', input: ['B', 'F', 'D', 'F', 'FP'], notes: 'Sweep' },
          { name: 'Take A Spin', input: ['F', 'F', 'D', 'D', 'FK'], notes: 'Sweep' },
          { name: 'Babality', input: ['F', 'B', 'F', 'BK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'D', 'D', 'D', 'FK'], notes: 'Varies' },
        ],
      },
    ],
  },
  kabal: {
    characterId: 'kabal',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Gas Blast', input: ['B', 'B', 'FP'], notes: '9%, Can be done in the air' },
          { name: 'Nomad Dash', input: ['B', 'F', 'BK'], notes: 'Spins opponent' },
          { name: 'Buzzsaw', input: ['B', 'B', 'FK'], notes: '8%, E: 2 Hits' },
          { name: 'Tornado Slam', input: ['D', 'B', 'BP'], notes: '3 Hits, 11%, Sweep' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: "Kabal's Deep", input: ['FS', '+', 'BL'], notes: '4 Hits, 34%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Last Breath', input: ['FP', 'FP', 'FP'], notes: '3 Hits, 10%' },
          { name: 'Multilation', input: ['B+FP', 'BP', 'FP'], notes: '3 Hits, 16%' },
          { name: 'Vanquish', input: ['BP', 'FP', 'BP'], notes: '3 Hits, 15%' },
          { name: "Nomad's Fear", input: ['F+FK', 'BP'], notes: '2 Hits, 11%' },
          { name: 'Eviscerate', input: ['F+BK', 'FP+BP'], notes: '2 Hits, 15%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Hook Up', input: ['B', 'F', 'B', 'F', 'FP'], notes: 'Sweep' },
          { name: 'It Takes Guts', input: ['D', 'D', 'B', 'F', 'BL'], notes: 'Sweep' },
          { name: 'Babality', input: ['F', 'D', 'B', 'FK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'D', 'BK'], notes: 'Varies' },
        ],
      },
    ],
  },
  raiden: {
    characterId: 'raiden',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Lightning Bolt', input: ['D', 'B', 'FP'], notes: '7%, E: 2 Hits' },
          { name: 'Electrocute', input: ['D', 'F', 'BP'], notes: '11%, Touching' },
          { name: 'Electric Fly', input: ['B', 'F', 'FK'], notes: '2 Hits, 10%, Can be done in air' },
          { name: 'Teleport', input: ['D', 'Up'], notes: '0%, E: Double Teleport' },
          { name: 'Vicinity Blast', input: ['D', 'B', 'BP'], notes: '7%, Close' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Shock Therapy', input: ['FS', '+', 'BL'], notes: '4 Hits, 34%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Heavenly Hand', input: ['FP', 'BP', 'FP', 'BP'], notes: '4 Hits, 10%' },
          { name: 'Sudden Energy', input: ['BP', 'BP', 'F+FP'], notes: '3 Hits, 13%' },
          { name: 'Quick Burn', input: ['F+BP', 'BK'], notes: '2 Hits, 13%' },
          { name: 'Spark Kicks', input: ['FK', 'FK', 'BK'], notes: '3 Hits, 15%' },
          { name: 'Thunder God', input: ['B+FK', 'FP', 'BP'], notes: '3 Hits, 12%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Just A Scratch', input: ['D', 'F', 'D', 'F', 'FP'], notes: 'Jump' },
          { name: 'Transplant', input: ['B', 'F', 'F', 'D', 'BK'], notes: 'Sweep' },
          { name: 'Babality', input: ['D', 'B', 'D', 'BK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'D', 'D', 'BP'], notes: 'Varies' },
        ],
      },
    ],
  },
  sheeva: {
    characterId: 'sheeva',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Fireball', input: ['D', 'F', 'BP'], notes: '12%, E: 14%' },
          { name: 'Jump Stomp', input: ['D', 'Up'], notes: '2 Hits, 11%' },
          { name: 'Ground Pound', input: ['D', 'B', 'BK'], notes: '9%, Unblockable' },
          { name: 'Grab N Punch', input: ['B', 'F', 'FK'], notes: '7 Hits, 18%, Sweep' },
          { name: 'Anti-Air Grab', input: ['D', 'F', 'FP'], notes: '3 Hits, 14%, Opponent in air' },
          { name: 'Low Grab', input: ['D', 'B', 'FK'], notes: '2 Hits, 13%, Opponent ducking' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Slam Dance', input: ['FS', '+', 'BL'], notes: '4 Hits, 33%, Unblockable' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Shokan Fury', input: ['FP', 'BP', 'B+FP'], notes: '3 Hits, 11%' },
          { name: 'Blood Lust', input: ['FP', 'B+BP', 'F+FP'], notes: '3 Hits, 17%' },
          { name: 'Four-Way', input: ['BP', 'FP', 'BP', 'F+FP'], notes: '4 Hits, 15%' },
          { name: 'Quad Toss', input: ['B+BP', 'FP+BP'], notes: '2 Hits, 17%' },
          { name: 'Turmoil', input: ['FK', 'FK'], notes: '2 Hits, 11%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Stripped Down', input: ['F', 'D', 'D', 'F', 'FP'], notes: 'Sweep' },
          { name: 'Lend A Hand', input: ['F', 'B', 'F', 'B', 'BK'], notes: 'Sweep' },
          { name: 'Babality', input: ['D', 'D', 'D', 'B', 'BK'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'D', 'D', 'D', 'FP'], notes: 'Varies' },
        ],
      },
    ],
  },
  cybersubzero: {
    characterId: 'cybersubzero',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Ice Ball', input: ['D', 'F', 'FP'], notes: '7% if opponent already frozen' },
          { name: 'Ice Bomb Close', input: ['B', 'B', 'FK'], notes: '8%, Unblockable' },
          { name: 'Ice Bomb Medium', input: ['F', 'F', 'FK'], notes: '8%, Unblockable' },
          { name: 'Slide', input: ['B', 'F', 'BK'], notes: '9%, E: 2 Hits' },
          { name: 'Teleport', input: ['D', 'B', 'FP'], notes: 'Can be done in air' },
          { name: 'Ice Parry', input: ['D', 'B', 'BP'], notes: '8%, Unblockable' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Cool Down', input: ['FS', '+', 'BL'], notes: '3 Hits, 36%, While in the air' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Cyborg Assault', input: ['FP', 'FP', 'FP'], notes: '3 Hits, 10%' },
          { name: 'Automation', input: ['FP', 'FP', 'BP'], notes: '3 Hits, 12%' },
          { name: 'Freezing Pain', input: ['F+FP', 'BK'], notes: '3 Hits, 19%' },
          { name: 'Cryo Bash', input: ['F+BP', 'BP', 'FP'], notes: '3 Hits, 12%' },
          { name: 'System Error', input: ['FK', 'FK', 'BP'], notes: '3 Hits, 14%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Kold Fusion', input: ['D', 'B', 'D', 'F', 'BP'], notes: 'Jump' },
          { name: 'Brain Freeze', input: ['D', 'D', 'B', 'D', 'FP'], notes: 'Jump' },
          { name: 'Babality', input: ['D', 'B', 'F', 'BL'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'D', 'Up', 'BL'], notes: 'Varies' },
        ],
      },
    ],
  },
  quanchi: {
    characterId: 'quanchi',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Skeletal Boost', input: ['D', 'B', 'BK'], notes: '33% Damage Boost' },
          { name: 'Ground Burst Close', input: ['D', 'B', 'FP'], notes: '7%, Unblockable' },
          { name: 'Ground Burst Medium', input: ['D', 'F', 'FP'], notes: '7%, Unblockable' },
          { name: 'Skull Ball', input: ['D', 'B', 'BP'], notes: '8%, E: 11%' },
          { name: 'Sky Drop', input: ['D', 'B', 'FK'], notes: '7%, Can be done in air' },
          { name: 'Trance', input: ['B', 'F', 'FK'], notes: '1%, Mesmerize opponent' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Amulet Assault', input: ['FS', '+', 'BL'], notes: '3 Hits, 32%, Sweep' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Afterlife', input: ['FP', 'FP', 'BP'], notes: '3 Hits, 12%' },
          { name: 'Spellbinder', input: ['BP', 'FP', 'BP'], notes: '3 Hits, 12%' },
          { name: 'Root Of Evil', input: ['BP', 'FP', 'BK'], notes: '3 Hits, 16%' },
          { name: 'Deterioration', input: ['B+FK', 'FK'], notes: '2 Hits, 11%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Beat Down', input: ['F', 'F', 'D', 'D', 'FP'], notes: 'Sweep' },
          { name: 'On Your Knees', input: ['D', 'F', 'D', 'F', 'BK'], notes: 'Sweep' },
          { name: 'Babality', input: ['F', 'D', 'B', 'BP'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['B', 'F', 'D', 'BP'], notes: 'Varies' },
        ],
      },
    ],
  },
  skarlet: {
    characterId: 'skarlet',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Up Slash', input: ['D', 'F', 'BP'], notes: '7%, Close, Pop-Up' },
          { name: 'Down Slash', input: ['D', 'B', 'BP'], notes: '9%, Close, Pop-Up' },
          { name: 'Blood Drop', input: ['D', 'B', 'BK'], notes: '8%, Can be done in air' },
          { name: 'Red Dash', input: ['D', 'F', 'FK'], notes: 'Dash' },
          { name: 'Blood Ball', input: ['F', 'D', 'B', 'FP'], notes: 'Drains 7% Health, 15%' },
          { name: 'Dagger Toss', input: ['D', 'F', 'FP'], notes: '2 Hits, 7%' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Blood Bank', input: ['FS', '+', 'BL'], notes: 'Up to 6 Hits, 29%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Krimson Bash', input: ['FP', 'FP', 'BP'], notes: '3 Hits, 9%' },
          { name: 'Blood Clot', input: ['B+FP', 'F+FK'], notes: '2 Hits, 11%' },
          { name: 'Coagulation', input: ['B+FP', 'FP', 'FK'], notes: '3 Hits, 16%' },
          { name: 'Punishment', input: ['BP', 'FP', 'BP'], notes: '3 Hits, 13%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Blood Bath', input: ['D', 'B', 'D', 'D', 'BL'], notes: 'Touching' },
          { name: "Maki It Rain", input: ['F', 'B', 'D', 'D', 'BK'], notes: 'Jump' },
          { name: 'Babality', input: ['D', 'B', 'D', 'F', 'BP'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['F', 'B', 'F', 'FP'], notes: 'Varies' },
        ],
      },
    ],
  },
  kenshi: {
    characterId: 'kenshi',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Spirit Charge', input: ['B', 'F', 'BP'], notes: '9%, E: 2 Hits' },
          { name: 'Rising Karma', input: ['D', 'B', 'FP'], notes: '5%, Pop-Up' },
          { name: 'Telekinetic Slash Close', input: ['D', 'B', 'BK'], notes: '10%, E: Pop-Up' },
          { name: 'Telekinetic Slash Medium', input: ['D', 'F', 'BK'], notes: '10%' },
          { name: 'Tele-Flurry', input: ['B', 'F', 'FK'], notes: '3 Hits, 9%' },
          { name: 'Blade Reflect', input: ['D', 'B', 'BP'], notes: 'Varies' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Soul Blade', input: ['FS', '+', 'BL'], notes: '3 Hits, 32%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Telekinetic Rush', input: ['FP', 'FP', 'FP'], notes: '3 Hits, 9%' },
          { name: 'Blind Justice', input: ['FP', 'FP', 'BP'], notes: '3 Hits, 13%' },
          { name: 'Heightened Senses', input: ['BP', 'FP', 'B+BP'], notes: '3 Hits, 15%, Corner Pop-Up' },
          { name: 'Absentminded', input: ['F+BP', 'BP', 'B+FP'], notes: '3 Hits, 14%, Pop-Up' },
          { name: 'Brainpower', input: ['F+FK', 'BP'], notes: '2 Hits, 11%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Scatterbrained', input: ['Up', 'D', 'Up', 'D', 'BL'], notes: 'Sweep' },
          { name: 'Split Ends', input: ['B', 'F', 'D', 'F', 'BP'], notes: 'Jump' },
          { name: 'Babality', input: ['D', 'B', 'D', 'FP'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['D', 'F', 'D', 'FK'], notes: 'Varies' },
        ],
      },
    ],
  },
  rain: {
    characterId: 'rain',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Water-Port', input: ['D', 'Up'], notes: 'Can be done in the air' },
          { name: 'Super Kick', input: ['D', 'B', 'BK'], notes: '7%, Pop-Up' },
          { name: 'Water Bubble', input: ['D', 'F', 'FK'], notes: 'Pop-Up' },
          { name: 'Geyser Kick', input: ['D', 'B', 'FK'], notes: '12%, E: 3 Hits' },
          { name: 'Lightning Storm', input: ['D', 'B', 'BP'], notes: '3%, Pop-Up' },
          { name: 'Aqua Splash', input: ['B', 'F', 'FP'], notes: '8%, E: 12%' },
          { name: 'H20 Boost', input: ['F', 'D', 'B', 'FP'], notes: '20% Damage Boost' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'Rain Check', input: ['FS', '+', 'BL'], notes: '3 Hits, 30%, Pop-Up' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'It Pours', input: ['FP', 'FP'], notes: '2 Hits, 9%' },
          { name: 'Right As Rain', input: ['FP', 'BP', 'F+BK'], notes: '3 Hits, 11%, Pop-Up' },
          { name: 'Dehydrate', input: ['BP', 'BK'], notes: '2 Hits, 11%' },
          { name: 'Spill Over', input: ['FK', 'FK', 'BK'], notes: '3 Hits, 13%' },
          { name: 'Moisturize Me', input: ['BK', 'FK', 'B+BK'], notes: '3 Hits, 17%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: 'Bubble Burst', input: ['B', 'F', 'D', 'B', 'BL'], notes: 'Jump' },
          { name: 'Does It Sting', input: ['Up', 'D', 'B', 'F', 'BP'], notes: 'Jump' },
          { name: 'Babality', input: ['B', 'D', 'F', 'FP'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['F', 'D', 'F', 'BK'], notes: 'Varies' },
        ],
      },
    ],
  },
  freddykreuger: {
    characterId: 'freddykreuger',
    sections: [
      {
        title: 'Special Attacks',
        moves: [
          { name: 'Hell Spike Close', input: ['D', 'B', 'FP'], notes: '6%, Pop-Up' },
          { name: 'Hell Spike Medium', input: ['D', 'F', 'FP'], notes: '6%, Pop-Up, E: 10%' },
          { name: 'Sweet Dreams', input: ['D', 'F', 'BK'], notes: '1%, Stuns Opponent' },
          { name: 'Glove Toss', input: ['B', 'F', 'BP'], notes: '9%, E: 13%' },
          { name: "Freddy's Fingers", input: ['D', 'B', 'BP'], notes: '9%, E: 13%' },
          { name: 'Dream Shift Away', input: ['D', 'B', 'FK'], notes: 'Teleport' },
          { name: 'Dream Shift Towards', input: ['D', 'F', 'FK'], notes: 'Teleport' },
          { name: 'Nightmare Stance', input: ['D', 'B', 'BK'], notes: 'Stance for 3 Attacks' },
        ],
      },
      {
        title: 'X-Ray Attack',
        moves: [
          { name: 'What a Rush', input: ['FS', '+', 'BL'], notes: '5 Hits, 36%' },
        ],
      },
      {
        title: 'Kombo Attacks',
        moves: [
          { name: 'Split You In Two', input: ['FP', 'FP', 'FP'], notes: '3 Hits, 9%' },
          { name: 'Skin The Cat', input: ['B+FP', 'BP', 'BP'], notes: '3 Hits, 12%' },
          { name: 'Kung Fu This Bitch', input: ['BP', 'BP', 'FP+BP'], notes: '3 Hits, 15%' },
          { name: 'I Am Eternal', input: ['F+BP', 'FP', 'B+FK'], notes: '3 Hits, 13%' },
          { name: 'Come To Freddy', input: ['FK', 'FK'], notes: '2 Hits, 11%' },
        ],
      },
      {
        title: 'Finishing Moves',
        moves: [
          { name: "Tell'Em Freddy Sent Ya", input: ['B', 'F', 'D', 'D', 'FP'], notes: 'Any' },
          { name: 'Welcome To My Nightmare', input: ['D', 'Up', 'F', 'B', 'BL'], notes: 'Sweep' },
          { name: 'Babality', input: ['B', 'F', 'D', 'FP'], notes: 'Jump' },
          { name: 'Stage Fatality', input: ['F', 'D', 'D', 'FK'], notes: 'Varies' },
        ],
      },
    ],
  },
};

export default mk9Moves;
