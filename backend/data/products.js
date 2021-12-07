const products = [
  {
    id: 1,
    name: 'AIRBORNE ASSORTED FRUIT GUMMIES 21CT',
    description: 'Airborne Original Gummies provides immune support in a great-tasting and easy-to-take form. Each serving (3) gummies delivers 750 mg of Vitamin C and is high in antioxidants (Vitamins C & E), and is an excellent source of Selenium. Also contains a proprietary herbal blend with Echinacea & Ginger. Airborne Original Gummies help support your immune system.*',
    manufacturer: 'Airborne',
    expiry: '09-09-2025',
    countInStock: 100,
    price: 9.49,
    isRxRequired: false,
    user: '61aecf76e15aeb0df4093380',
    imagePath: 'https://medikartimagedump.s3.amazonaws.com/Images/Airborne.jpg'
  },
  {
    id: 2,
    name: 'BENADRYL ALLERGY ULTRA TABLETS 24CT',
    description: 'Benadryl Allergy anti-histamine tablets (Diphenhydramine HCl 25 mg) temporarily relieve allergy and common cold symptoms, including runny nose, sneezing, itchy nose and throat, and itchy, watery eyes.',
    manufacturer: 'Benadryl',
    expiry: '10-10-2025',
    countInStock: 100,
    price: 9.49,
    isRxRequired: false,
    imagePath: 'https://medikartimagedump.s3.amazonaws.com/Images/benadryl.jpg'
  }, 
  {
    id: 3,
    name: 'MUCINEX DM MAXIMUM STRENGTH 12-HOUR EXPECTORANT AND COUGH SUPPRESSANT TABLETS, 14 CT',
    description: 'Quiets wet & dry coughs. Thins & loosens mucus that causes chest congestion Starts to work right away & lasts for 12 hours, Maximum Strength, Extended-release bi-layer tablet. Mucinex is the #1 doctor recommended OTC expectorant among Internists, General Practitioners & Family Practitioners',
    manufacturer: 'Mucinex',
    expiry: '09-09-2025',
    countInStock: 10,
    price: 9.49,
    isRxRequired: false,
    imagePath: 'https://medikartimagedump.s3.amazonaws.com/Images/Mucinex.png'
  },
  {
    id: 4,
    name: '160 PTS BAND-AID LARGE TRIPLE LAYER HURT FREE NON-STICK PADS 3" X 4" 10CT',
    description: 'Zero-ouch, full coverage. Band-Aid Large Triple Layer Hurt Free Pads are perfect for protecting minor cuts and scrapes without sticking to it.',
    manufacturer: 'J&J',
    expiry: '09-09-2025',
    countInStock: 100,
    price: 3.99,
    isRxRequired: false,
    imagePath: 'https://medikartimagedump.s3.amazonaws.com/Images/BandAid.png'
  },
  {
    id: 5,
    name: 'DREAM WELL GUAVA SLEEP AID 3.4OZ',
    description: 'Dream Well is a drug-free, non-drowsy holistic sleep solution designed to help ease your mind and reduce caffeine levels in your body, so you can doze off faster and wake up restored. De-stress, ease the mind — Lemon balm extract helps ease the mind and relax the body into a state of rest. An initial study shows that lemon balm extract helped reduce anxiety-related insomnia by 42% by increasing GABA in the brain. Detox caffeine, eliminate morning grogginess — Evodia rutaecarpa extract helps reduce caffeine levels in your body so you can get deeper, more restful sleep. Glycine supports cognitive processing, so you can wake up restored and ready for the day ahead. Fall asleep faster — Drink one bottle of Dream Well approximately 30 minutes before you’re ready to sleep. Dream Well was designed to be taken in full, but drink half if you’re unable to sleep for a full 7-8 hours. If you normally have a hard time waking up, start with half a bottle. Trusted with highly-researched ingredients — Dream Well is safe and uses FDA-compliant, natural ingredients. We ensure ingredient sourcing, testing and production process comply with the regulations and requirements put forth by the FDA. Manufacturing facilities are NSF-certified. Vegan, gluten free, soy free, nut free. TSA-compliant',
    manufacturer: 'Vive Organic',
    expiry: '09-09-2025',
    countInStock: 100,
    price: 3.19,
    isRxRequired: false,
    imagePath: 'https://medikartimagedump.s3.amazonaws.com/Images/Dream+Well.jpg'
  },
  {
    id: 6,
    name: 'DULCOLAX LAXATIVE TABLETS 10CT',
    description: 'Gentle, predictable, overnight relief. Get relief fast.',
    manufacturer: 'Dulcolax',
    expiry: '09-09-2025',
    countInStock: 100,
    price: 5.79,
    isRxRequired: false,
    imagePath: 'https://medikartimagedump.s3.amazonaws.com/Images/Dulcolax.jpg'
  },
  {
    id: 7,
    name: 'HYDRANT RASPBERRY LEMON + CAFFEINE HYDRATION MIX 0.29OZ 12CT',
    description: 'HYDRANT RASPBERRY LEMON + CAFFEINE HYDRATION MIX 0.29OZ 12CT',
    manufacturer: 'Recess Magnesium',
    expiry: '09-09-2025',
    countInStock: 100,
    price: 12.499,
    isRxRequired: false,
    imagePath: 'https://medikartimagedump.s3.amazonaws.com/Images/hydrant.png'
  },
  {
    id: 8,
    name: 'GT\'S TRILOGY KOMBUCHA 16OZ BTL',
    description: 'Celebrate our beautiful blue planet with this Mother Nature-inspired offering. Raw coconut water and silky blue spirulina finished with fresh-pressed ginger. Shop now.',
    manufacturer: 'GTs',
    expiry: '09-09-2025',
    countInStock: 100,
    price: 3.99,
    isRxRequired: false,
    imagePath: 'https://medikartimagedump.s3.amazonaws.com/Images/kombhucha.jpg'
  },
  {
    id: 9,
    name: 'MOTRIN LIQUID GELS 20CT',
    description: 'Ibuprofen Capsules, 200mg. Pain Reliever/ Fever Reducer',
    manufacturer: 'Morpen',
    expiry: '10-10-2024',
    countInStock: 140,
    price: 8.49,
    isRxRequired: false,
    imagePath: 'https://medikartimagedump.s3.amazonaws.com/Images/Motrin_LiquidGels.jpg'
  },
  {
    id: 10,
    name: 'PANTOPRAZOLE 40MG',
    description: 'PANTOPRAZOLE (pan TOE pra zole) prevents the production of acid in the stomach. It is used to treat gastroesophageal reflux disease (GERD), inflammation of the esophagus, and Zollinger-Ellison syndrome.',
    manufacturer: 'SUN',
    expiry: '09-09-2025',
    countInStock: 100,
    price: 420,
    isRxRequired: true,
    imagePath: 'https://medikartimagedump.s3.amazonaws.com/Images/Paphzole-40mg-tab-Prector-life-sciences.jpg'
  },
  {
    id: 11,
    name: 'TYLENOL EXTRA STRENGTH CAPLETS 24CT',
    description: 'Tylenol Extra Strength caplets (500 mg acetaminophen each) help reduce fever and temporarily relieve aches and pains. It may be appropriate for tension headaches, back pain, menstrual cramps, minor arthritis pain, toothaches, muscular aches and aches associated with the common cold.',
    manufacturer: 'Tylenol',
    expiry: '09-09-2025',
    countInStock: 100,
    price: 7.99,
    isRxRequired: false,
    imagePath: 'https://medikartimagedump.s3.amazonaws.com/Images/Tylenol.jpg'
  },
  {
    id: 12,
    name: 'INFUSED BLOOD ORANGE SPARKLING WATER - RECESS MAGNESIUM - 12OZ',
    description: 'Recess Mood is a sparkling water infused with magnesium and adaptogens to calm the mind and lift the mood. made with real fruit and no fake stuff because your taste buds deserve it the flavor: balanced and grounded, like a good piece of advice the taste: brewed with real orange zest, orange oil and blood orange juice for a well-rounded blood orange flavor that brings everything into focus',
    manufacturer: 'Recess Magnesium',
    expiry: '09-09-2025',
    countInStock: 100,
    price: 3.99,
    isRxRequired: false,
    imagePath: 'https://medikartimagedump.s3.amazonaws.com/Images/Recess+water.png'
  },
  {
    id: 13,
    name: 'VICKS DAYQUIL NYQUIL COMBO PACK COLD & FLU LIQUICAPS 24CT',
    description: 'Vicks DayQuil Cold & Flu provides powerful, non-drowsy, daytime relief for your worst cold and flu symptoms. DayQuil relieves headache, fever, sore throat, minor aches & pains, nasal congestion, and cough. Contains acetaminophen. Vicks NyQuil Cold & Flu delivers powerful nighttime relief for your worst cold and flu symptoms so that you can get the rest you need. Fight symptoms such as cough, headache, fever, sore throat, minor aches and pains, sneezing, runny nose. Contains acetaminophen. Use as directed. Keep out of reach of children',
    manufacturer: 'Vicks',
    expiry: '10-10-2024',
    countInStock: 140,
    price: 8.49,
    isRxRequired: false,
    imagePath: 'https://medikartimagedump.s3.amazonaws.com/Images/Vicks.png'
  },
  {
    id: 14,
    name: 'VIVE ORGANIC WELLNESS RESCUE SHOT 2OZ',
    description: 'This cold-pressed shot contains a balanced blend of super herbs and organic citrus packs a punch when you need it. Take 1-3 shots to support a speedy recovery (especially when you\'re in miserable condition.) Contains your daily dose cold pressured oil of oregano and organic elderberry, with a medium concentration of organic ginger and organic cayenne pepper. Function Focused Wellness Shot- Power-packed, spicy blend of roots, super herbs and organic citrus packs a punch when you need it most. Wellness Rescue is a nutrient dense blend of oil of oregano, ginger, cayenne pepper, elderberries, aloe leaf and pomegranate. Take one to three shots to support a speedy recovery (especially when you\'re in a miserable condition!). USDA Organic, Non-GMO, Kosher, Vegan, Gluten-Free, Cold-Pressed, No added sweeteners or artificial ingredients.',
    manufacturer: 'Vive Organic',
    expiry: '10-10-2024',
    countInStock: 140,
    price: 8.49,
    isRxRequired: false,
    imagePath: 'https://medikartimagedump.s3.amazonaws.com/Images/vive.png'
  },
]

export default products
