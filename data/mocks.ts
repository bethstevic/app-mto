export const CUSTOMERS = [
  {id: 1, name: 'Hajjar', streetAddress: '4786 Old Timber Ridge Rd', city: 'Marietta', zipCode: '30068', data: '' },
  {id: 2, name: 'Springs', streetAddress: '4786 Old Timber Ridge Rd', city: 'Marietta', zipCode: '30068', data: '' },
  {id: 3, name: 'Rosconi', streetAddress: '4786 Old Timber Ridge Rd', city: 'Marietta', zipCode: '30068', data: '' },
  {id: 4, name: 'Lewis', streetAddress: '4786 Old Timber Ridge Rd', city: 'Marietta', zipCode: '30068', data: '' },
  {id: 5, name: 'Sigman', streetAddress: '4786 Old Timber Ridge Rd', city: 'Marietta', zipCode: '30068', data: '' },
]

export const MATERIAL_TAKEOFFS = {
  Framing: [
    {id: 1, materialSize: 'bags', exact: 50, materialType: 'concrete', usedFor: 'footings', notes: ''},
    {id: 2, materialSize: '6x6x10', exact: 1, materialType: 'PT #2', usedFor: 'support posts stair support', notes: ''},
    {id: 3, materialSize: '6x6x14', exact: 4, materialType: 'PT #2', usedFor: 'support posts cut in 2', notes: ''},
    {id: 4, materialSize: '2x6x12', exact: 3, materialType: 'PT #2', usedFor: 'bracing', notes: ''},
    {id: 5, materialSize: '2x4x14', exact: 8, materialType: 'Whitewood', usedFor: 'temporaries', notes: ''},
    {id: 6, materialSize: '2x8x8', exact: 1, materialType: 'PT #2', usedFor: 'stair support beam', notes: ''},
  ],
  Hardware: [
    {id: 1, materialSize: '6x6', exact: 10, materialType: 'Post bases w/anchers', usedFor: 'footings', notes: ''},
    {id: 2, materialSize: 'box 3"', exact: 0.25, materialType: 'Screw shank framing nails', usedFor: 'framing', notes: ''},
    {id: 3, materialSize: '1/2"x8"', exact: 142, materialType: 'Hex head bolts w/nuts and washers', usedFor: 'posts, bracing, house band, and stringers', notes: ''},
    {id: 4, materialSize: '1/2"x10"', exact: 22, materialType: 'Hex head bolts w/nuts and washers', usedFor: 'rail posts 2 each', notes: ''},
  ],
  Decking: [
    {id: 1, materialSize: '2x6x12', exact: 3, materialType: 'PT #2', usedFor: 'decking', notes: ''},
    {id: 2, materialSize: '2x6x16', exact: 3, materialType: 'PT #2', usedFor: 'decking', notes: 'Verify length'},
    {id: 3, materialSize: '2x6x20', exact: 3, materialType: 'PT #2', usedFor: 'decking', notes: ''},
    {id: 4, materialSize: '2x6x24', exact: 3, materialType: 'PT #2', usedFor: 'decking', notes: ''},
  ],
  Railing: [
    {id: 1, materialSize: '2x4x8', exact: 3, materialType: 'KDAT', usedFor: 'top and bottom rail', notes: ''},
    {id: 2, materialSize: 'Black round steel', exact: 207, materialType: 'Balusters', usedFor: 'rail', notes: ''},
    {id: 3, materialSize: 'bags', exact: 4, materialType: 'straight baluster connectors', usedFor: 'rail', notes: ''},
    {id: 4, materialSize: 'bags', exact: 8, materialType: 'Stair baluster connectors', usedFor: 'rail', notes: ''},
    {id: 5, materialSize: 'each', exact: 4, materialType: 'Handrail connectors', usedFor: 'handrail', notes: 'verify needed'},
    {id: 6, materialSize: '2x2x8', exact: 1, materialType: 'KDAT', usedFor: 'handrail', notes: ''},
  ],
  PorchFraming: [
    {id: 1, materialSize: '2x6x12', exact: 3, materialType: 'PT #2', usedFor: 'wall posts', notes: ''},
    {id: 2, materialSize: '2x6x16', exact: 3, materialType: 'PT #2', usedFor: 'wall beam', notes: ''},
    {id: 3, materialSize: '2x6x20', exact: 3, materialType: 'KDAT', usedFor: 'trim', notes: ''},
    {id: 4, materialSize: '2x6x24', exact: 3, materialType: 'LVL', usedFor: 'ridge beam', notes: ''},
  ],
  FinishesWrapsAndTrim: [
    {id: 1, materialSize: '4x8 sheets', exact: 10, materialType: 'Beadboard', usedFor: 'ceiling finish', notes: ''},
    {id: 2, materialSize: "12'", exact: 15, materialType: 'Lattice Strips', usedFor: 'ceiling finish', notes: ''},
    {id: 3, materialSize: '1x4x18', exact: 2, materialType: 'PVC', usedFor: 'trim', notes: ''},
    {id: 4, materialSize: '1x8x18', exact: 38, materialType: 'PVC', usedFor: 'trim', notes: ''},
  ],
  Roofing: [
    {id: 1, materialSize: 'sq', exact: 10, materialType: 'Shingles', usedFor: 'roofing', notes: ''},
    {id: 2, materialSize: 'sq', exact: 10, materialType: 'Underlayment', usedFor: 'roofing', notes: ''},
    {id: 3, materialSize: 'sq', exact: 10, materialType: 'Ice and water shield', usedFor: 'roofing', notes: ''},
    {id: 4, materialSize: 'sq', exact: 10, materialType: 'Drip edge', usedFor: 'roofing', notes: ''},
    {id: 5, materialSize: 'sq', exact: 10, materialType: 'Ridge vent', usedFor: 'roofing', notes: ''},
  ]
}

export const MATERIAL_OVERAGES = {
  pvc: 1.5,
  kdat: 1.2,
  lvl: 1,
  psl: 1,
  whitewood: 1.1,
  general: 1.1
}