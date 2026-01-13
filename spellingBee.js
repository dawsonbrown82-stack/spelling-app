/***********************
 * DATA (YOU EDIT THIS)
 ***********************/

const STORAGE_KEY = "spellingAppState_v1";
const infoArea = document.getElementById("infoArea");

// Example word list — replace with your real data
const grade6Words = [  
	{ word: "accomplished", definition: "highly skilled or successful", sentence: "She is an accomplished singer who performs on stage.", difficulty: "normal" },
	{ word: "accordion", definition: "a musical instrument played by squeezing and pulling", sentence: "He played a cheerful tune on his accordion.", difficulty: "normal" },
	{ word: "accused", definition: "blamed for doing something wrong", sentence: "She was accused of breaking the vase.", difficulty: "normal" },
	{ word: "acquire", definition: "to get or obtain something", sentence: "He hopes to acquire a new skill this year.", difficulty: "normal" },
	{ word: "adjacent", definition: "next to or beside something", sentence: "The playground is adjacent to the school.", difficulty: "normal" },
	{ word: "advertisement", definition: "a message that promotes something", sentence: "The advertisement made the toy look exciting.", difficulty: "normal" },
	{ word: "aghast", definition: "shocked or horrified", sentence: "She was aghast when she saw the mess.", difficulty: "normal" },
	{ word: "airborne", definition: "in the air or flying", sentence: "The kite became airborne as the wind picked up.", difficulty: "normal" },
	{ word: "amazement", definition: "great surprise or wonder", sentence: "He watched in amazement as the fireworks exploded.", difficulty: "normal" },
	{ word: "ambitious", definition: "having strong goals", sentence: "She is ambitious and wants to be a doctor.", difficulty: "normal" },
	{ word: "amused", definition: "entertained or made to laugh", sentence: "The puppy looked amused by the bouncing ball.", difficulty: "normal" },
	{ word: "amusement", definition: "enjoyment or fun", sentence: "The park had many rides for everyone’s amusement.", difficulty: "normal" },
	{ word: "anthropologist", definition: "a scientist who studies humans and cultures", sentence: "The anthropologist traveled to study ancient tribes.", difficulty: "normal" },
	{ word: "apologizing", definition: "saying sorry", sentence: "He kept apologizing for being late.", difficulty: "normal" },
	{ word: "appetizer", definition: "a small dish before the main meal", sentence: "We shared nachos as an appetizer.", difficulty: "normal" },
	{ word: "applaud", definition: "to clap to show approval", sentence: "The audience began to applaud loudly.", difficulty: "normal" },
	{ word: "appliances", definition: "machines used at home", sentence: "The new appliances made cooking easier.", difficulty: "normal" },
	{ word: "appreciate", definition: "to value or be thankful for", sentence: "I appreciate your help with the project.", difficulty: "normal" },
	{ word: "apprentice", definition: "someone learning a trade", sentence: "The apprentice watched the chef carefully.", difficulty: "normal" },
	{ word: "aquamarines", definition: "blue-green gemstones", sentence: "Her bracelet sparkled with aquamarines.", difficulty: "normal" },
	{ word: "archaeologist", definition: "a scientist who studies ancient objects", sentence: "The archaeologist discovered an old temple.", difficulty: "normal" },
	{ word: "arrangement", definition: "the way things are organized", sentence: "The flower arrangement looked beautiful.", difficulty: "normal" },
	{ word: "associate", definition: "to connect one thing with another", sentence: "Many people associate winter with snow.", difficulty: "normal" },
	{ word: "atmosphere", definition: "the air around Earth or the mood of a place", sentence: "The café had a warm atmosphere.", difficulty: "normal" },
	{ word: "attachment", definition: "something connected to something else", sentence: "He added the photo as an email attachment.", difficulty: "normal" },
	{ word: "attic", definition: "the space or room just below the roof of a house", sentence: "They stored old boxes in the attic.", difficulty: "normal" },
	{ word: "autopsy", definition: "a medical examination of a body to find the cause of death", sentence: "The doctor performed an autopsy to learn what happened.", difficulty: "normal" },
	{ word: "awesome", definition: "extremely good or impressive", sentence: "The fireworks show was absolutely awesome.", difficulty: "normal" },
	{ word: "background", definition: "the area behind something", sentence: "The mountains looked beautiful in the background.", difficulty: "normal" },
	{ word: "banquets", definition: "large formal meals", sentence: "The hotel hosted two banquets this weekend.", difficulty: "normal" },
	{ word: "barefoot", definition: "without shoes", sentence: "She walked barefoot on the soft grass.", difficulty: "normal" },
	{ word: "beanie", definition: "a small knit cap", sentence: "He wore a beanie to keep warm.", difficulty: "normal" },
	{ word: "behavior", definition: "the way someone acts", sentence: "The teacher praised his good behavior.", difficulty: "normal" },
	{ word: "Benedictine", definition: "relating to the Benedictine religious order", sentence: "The monks followed Benedictine traditions.", difficulty: "normal" },
	{ word: "bind", definition: "to tie or fasten", sentence: "They used rope to bind the logs together.", difficulty: "normal" },
	{ word: "binoculars", definition: "a tool for seeing distant things", sentence: "He used binoculars to watch the birds.", difficulty: "normal" },
	{ word: "bitterness", definition: "a strong unpleasant taste or feeling", sentence: "The medicine had a slight bitterness.", difficulty: "normal" },
	{ word: "boardwalk", definition: "a wooden walkway near a beach", sentence: "We strolled along the boardwalk at sunset.", difficulty: "normal" },
	{ word: "botanist", definition: "a scientist who studies plants", sentence: "The botanist examined the rare flower.", difficulty: "normal" },
	{ word: "breakdown", definition: "a failure or collapse", sentence: "The car had a breakdown on the highway.", difficulty: "normal" },
	{ word: "breathless", definition: "unable to breathe easily", sentence: "She was breathless after running fast.", difficulty: "normal" },
	{ word: "brokenhearted", definition: "very sad or upset", sentence: "He felt brokenhearted after the bad news.", difficulty: "normal" },
	{ word: "brook", definition: "a small stream", sentence: "The brook flowed gently through the forest.", difficulty: "normal" },
	{ word: "bruise", definition: "a dark mark from an injury", sentence: "She got a bruise after bumping her leg.", difficulty: "normal" },
	{ word: "budget", definition: "a plan for spending money", sentence: "They made a budget for the trip.", difficulty: "normal" },
	{ word: "buffalo", definition: "a large wild animal", sentence: "The buffalo grazed in the field.", difficulty: "normal" },
	{ word: "bulldozer", definition: "a large machine for pushing earth", sentence: "The bulldozer cleared the construction site.", difficulty: "normal" },
	{ word: "bungalow", definition: "a small one-story house", sentence: "They stayed in a cozy bungalow near the beach.", difficulty: "normal" },
	{ word: "buzzes", definition: "makes a humming sound", sentence: "The bee buzzes around the flowers.", difficulty: "normal" },
	{ word: "calculation", definition: "a math process to find an answer", sentence: "His calculation was correct.", difficulty: "normal" },
	{ word: "campfire", definition: "an outdoor fire for warmth or cooking", sentence: "We roasted marshmallows over the campfire.", difficulty: "normal" },
	{ word: "canopy", definition: "a covering that hangs over something", sentence: "The canopy protected us from the sun.", difficulty: "normal" },
	{ word: "cardigan", definition: "a knitted sweater that opens in front", sentence: "She wore a warm cardigan to school.", difficulty: "normal" },
	{ word: "carousel", definition: "a spinning ride with animals to sit on", sentence: "The children loved the carousel at the fair.", difficulty: "normal" },
	{ word: "cephalothorax", definition: "the fused head and body of some animals", sentence: "A spider’s cephalothorax holds its eyes and legs.", difficulty: "normal" },
	{ word: "cerebellum", definition: "the part of the brain that controls movement", sentence: "The cerebellum helps you stay balanced.", difficulty: "normal" },
	{ word: "ceremonial", definition: "related to a ceremony", sentence: "They wore ceremonial clothing for the event.", difficulty: "normal" },
	{ word: "chandelier", definition: "a fancy hanging light", sentence: "The chandelier sparkled above the table.", difficulty: "normal" },
	{ word: "circuit", definition: "a path for electricity", sentence: "The light turned on when the circuit was complete.", difficulty: "normal" },
	{ word: "clothing", definition: "items worn on the body", sentence: "She folded her clothing neatly.", difficulty: "normal" },
	{ word: "clucking", definition: "the sound a chicken makes", sentence: "The hens were clucking in the yard.", difficulty: "normal" },
	{ word: "clumsy", definition: "awkward or not graceful", sentence: "He felt clumsy when he tripped.", difficulty: "normal" },
	{ word: "cobblestone", definition: "a rounded stone used for roads", sentence: "The old street was made of cobblestone.", difficulty: "normal" },
	{ word: "cochlea", definition: "a spiral part of the inner ear", sentence: "The cochlea helps you hear sounds.", difficulty: "normal" },
	{ word: "cockatiel", definition: "a small parrot with a crest", sentence: "Their cockatiel whistled happily.", difficulty: "normal" },
	{ word: "cocoa", definition: "a powder used to make chocolate drinks", sentence: "She made warm cocoa on a cold day.", difficulty: "normal" },
	{ word: "collection", definition: "a group of gathered items", sentence: "He showed me his coin collection.", difficulty: "normal" },
	{ word: "comfortable", definition: "feeling relaxed", sentence: "The chair was very comfortable.", difficulty: "normal" },
	{ word: "committed", definition: "dedicated or loyal", sentence: "She is committed to finishing her project.", difficulty: "normal" },
	{ word: "committee", definition: "a group that makes decisions", sentence: "The committee voted on the plan.", difficulty: "normal" },
	{ word: "conductor", definition: "someone who leads a musical group", sentence: "The conductor raised his baton.", difficulty: "normal" },
	{ word: "core", definition: "the central or most important part", sentence: "The core of the apple was left over.", difficulty: "normal" },
	{ word: "cotton", definition: "a soft white fiber used for fabric", sentence: "Her shirt was made of cotton.", difficulty: "normal" },
	{ word: "cougar", definition: "a large wild cat", sentence: "The cougar moved silently through the trees.", difficulty: "normal" },
	{ word: "course", definition: "a path or class of study", sentence: "He took a course in biology.", difficulty: "normal" },
	{ word: "craftsman", definition: "a skilled worker", sentence: "The craftsman carved the wood carefully.", difficulty: "normal" },
	{ word: "creepy", definition: "strange and scary", sentence: "The old house looked creepy at night.", difficulty: "normal" },
	{ word: "crow", definition: "a black bird known for its cawing", sentence: "A crow landed on the fence.", difficulty: "normal" },
	{ word: "cruise", definition: "a trip on a large ship", sentence: "They went on a cruise to the islands.", difficulty: "normal" },
	{ word: "crust", definition: "the outer layer of something", sentence: "The pizza crust was crispy.", difficulty: "normal" },
	{ word: "cuddly", definition: "soft and pleasant to hug", sentence: "The stuffed bear was very cuddly.", difficulty: "normal" },
	{ word: "cunning", definition: "clever in a tricky way", sentence: "The fox was cunning and quick.", difficulty: "normal" },
	{ word: "curled", definition: "formed into a curved shape", sentence: "The cat curled up on the couch.", difficulty: "normal" },
	{ word: "current", definition: "happening now or a flow of water", sentence: "The river’s current was strong.", difficulty: "normal" },
	{ word: "cutaneous", definition: "related to the skin", sentence: "A cutaneous rash can be itchy.", difficulty: "normal" },
	{ word: "cymbals", definition: "metal instruments that crash together", sentence: "The cymbals made a loud sound.", difficulty: "normal" },
	{ word: "czar", definition: "a former Russian ruler", sentence: "The czar lived in a grand palace.", difficulty: "normal" },
	{ word: "decadence", definition: "excessive luxury or self-indulgence", sentence: "The rich dessert felt like pure decadence.", difficulty: "normal" },
	{ word: "deforestation", definition: "cutting down many trees", sentence: "Deforestation harms animal habitats.", difficulty: "normal" },
	{ word: "delightful", definition: "very pleasant or enjoyable", sentence: "The cookies were absolutely delightful.", difficulty: "normal" },
	{ word: "deliver", definition: "to bring or hand over something", sentence: "The driver will deliver the package today.", difficulty: "normal" },
	{ word: "denominator", definition: "the bottom number in a fraction", sentence: "The denominator shows total parts.", difficulty: "normal" },
	{ word: "diaphragm", definition: "a muscle that helps you breathe", sentence: "Your diaphragm moves when you inhale.", difficulty: "normal" },
	{ word: "disgusting", definition: "very unpleasant", sentence: "The smell was absolutely disgusting.", difficulty: "normal" },
	{ word: "draft", definition: "a rough version of writing", sentence: "She wrote a draft of her essay.", difficulty: "normal" },
	{ word: "dynamite", definition: "an explosive material", sentence: "The workers used dynamite to break the rock.", difficulty: "normal" },
	{ word: "earmuffs", definition: "warm coverings for the ears", sentence: "She wore earmuffs in the snow.", difficulty: "normal" },
	{ word: "echo", definition: "a repeated sound", sentence: "His shout made an echo in the cave.", difficulty: "normal" },
	{ word: "eclipse", definition: "when one object blocks another in space", sentence: "We watched the solar eclipse safely.", difficulty: "normal" },
	{ word: "electricity", definition: "energy that powers devices", sentence: "Electricity keeps the lights on.", difficulty: "normal" },
	{ word: "electron", definition: "a tiny particle with a negative charge", sentence: "An electron moves around the atom.", difficulty: "normal" },
	{ word: "enamel", definition: "a hard coating on teeth", sentence: "Brushing protects your tooth enamel.", difficulty: "normal" },
	{ word: "enclosure", definition: "a space that is closed in", sentence: "The rabbits stayed in their enclosure.", difficulty: "normal" },
	{ word: "encouraged", definition: "given support or confidence", sentence: "Her coach encouraged her to try again.", difficulty: "normal" },
	{ word: "enlighten", definition: "to teach or give knowledge", sentence: "The book helped enlighten its readers.", difficulty: "normal" },
	{ word: "enthusiastic", definition: "excited and eager", sentence: "He was enthusiastic about the trip.", difficulty: "normal" },
	{ word: "equivalent", definition: "equal in value or meaning", sentence: "Two quarters are equivalent to fifty cents.", difficulty: "normal" },
	{ word: "erosion", definition: "wearing away of land", sentence: "Erosion shaped the canyon.", difficulty: "normal" },
	{ word: "excavate", definition: "to dig up something buried", sentence: "They excavate fossils carefully.", difficulty: "normal" },
	{ word: "exchanging", definition: "giving one thing for another", sentence: "They were exchanging gifts.", difficulty: "normal" },
	{ word: "exercise", definition: "physical activity", sentence: "She does exercise every morning.", difficulty: "normal" },
	{ word: "exhaustion", definition: "extreme tiredness", sentence: "He collapsed from exhaustion.", difficulty: "normal" },
	{ word: "exploitation", definition: "unfair use of something or someone", sentence: "The movie exposed exploitation of workers.", difficulty: "normal" },
	{ word: "extinction", definition: "when a species dies out", sentence: "Dinosaurs faced extinction long ago.", difficulty: "normal" },
	{ word: "fertilization", definition: "joining of egg and sperm", sentence: "Fertilization begins new life.", difficulty: "normal" },
	{ word: "fictitious", definition: "not real; made up", sentence: "The story was about a fictitious town.", difficulty: "normal" },
	{ word: "fisherman", definition: "someone who catches fish", sentence: "The fisherman cast his net.", difficulty: "normal" },
	{ word: "foolish", definition: "lacking good sense", sentence: "It was foolish to run in the rain.", difficulty: "normal" },
	{ word: "foreground", definition: "the front part of a picture", sentence: "The tree stood in the foreground.", difficulty: "normal" },
	{ word: "forgotten", definition: "not remembered", sentence: "He had forgotten his keys.", difficulty: "normal" },
	{ word: "frightening", definition: "scary", sentence: "The loud thunder was frightening.", difficulty: "normal" },
	{ word: "frisbee", definition: "a flying plastic disc", sentence: "They played frisbee at the park.", difficulty: "normal" },
	{ word: "frustration", definition: "feeling upset from difficulty", sentence: "She sighed in frustration.", difficulty: "normal" },
	{ word: "fundraiser", definition: "an event to raise money", sentence: "The school held a fundraiser.", difficulty: "normal" },
	{ word: "gender", definition: "being male or female", sentence: "The form asked for gender.", difficulty: "normal" },
	{ word: "gentleman", definition: "a polite man", sentence: "He acted like a true gentleman.", difficulty: "normal" },
	{ word: "geographer", definition: "a scientist who studies Earth", sentence: "The geographer made a map.", difficulty: "normal" },
	{ word: "geothermal", definition: "heat from inside Earth", sentence: "Geothermal energy warms some homes.", difficulty: "normal" },
	{ word: "geyser", definition: "a hot spring that shoots water", sentence: "The geyser erupted suddenly.", difficulty: "normal" },
	{ word: "gondola", definition: "a long boat used in Venice", sentence: "They rode a gondola down the canal.", difficulty: "normal" },
	{ word: "gondolier", definition: "the person who rows a gondola", sentence: "The gondolier sang as he rowed.", difficulty: "normal" },
	{ word: "goose", definition: "a large water bird", sentence: "The goose honked loudly.", difficulty: "normal" },
	{ word: "greatness", definition: "the quality of being excellent", sentence: "She dreamed of achieving greatness.", difficulty: "normal" },
	{ word: "groan", definition: "a low sound of pain", sentence: "He let out a groan after falling.", difficulty: "normal" },
	{ word: "grotesque", definition: "very ugly or distorted", sentence: "The statue looked strangely grotesque.", difficulty: "normal" },
	{ word: "grown", definition: "fully developed", sentence: "The grown cat was much bigger.", difficulty: "normal" },
	{ word: "grumble", definition: "to complain quietly", sentence: "He began to grumble about the chores.", difficulty: "normal" },
	{ word: "hammock", definition: "a hanging bed made of fabric or rope", sentence: "He relaxed in the hammock under the trees.", difficulty: "normal" },
	{ word: "harmonica", definition: "a small musical instrument played by blowing air", sentence: "She played a tune on her harmonica.", difficulty: "normal" },
	{ word: "Hawaii", definition: "a U.S. state made of islands", sentence: "They traveled to Hawaii for vacation.", difficulty: "normal" },
	{ word: "headgear", definition: "something worn on the head", sentence: "The cyclist wore protective headgear.", difficulty: "normal" },
	{ word: "heaven", definition: "a place of perfect happiness", sentence: "The sunset looked like a piece of heaven.", difficulty: "normal" },
	{ word: "heirloom", definition: "a valuable family object passed down", sentence: "The ring was a precious heirloom.", difficulty: "normal" },
	{ word: "herbivore", definition: "an animal that eats plants", sentence: "A cow is a herbivore.", difficulty: "normal" },
	{ word: "heritage", definition: "traditions passed down through generations", sentence: "They celebrated their cultural heritage.", difficulty: "normal" },
	{ word: "hiccups", definition: "sudden, repeated sounds from the throat", sentence: "He got hiccups after drinking too fast.", difficulty: "normal" },
	{ word: "highway", definition: "a major public road", sentence: "They drove down the highway for hours.", difficulty: "normal" },
	{ word: "hikers", definition: "people who walk long distances outdoors", sentence: "The hikers reached the mountain peak.", difficulty: "normal" },
	{ word: "hisses", definition: "makes a sharp 'sss' sound", sentence: "The snake hisses when it feels threatened.", difficulty: "normal" },
	{ word: "Holland", definition: "another name for part of the Netherlands", sentence: "They visited tulip fields in Holland.", difficulty: "normal" },
	{ word: "hollow", definition: "empty on the inside", sentence: "The tree trunk was hollow.", difficulty: "normal" },
	{ word: "hologram", definition: "a 3D image created with light", sentence: "The concert used a hologram of the singer.", difficulty: "normal" },
	{ word: "humongous", definition: "extremely large", sentence: "The sandwich was humongous.", difficulty: "normal" },
	{ word: "humus", definition: "rich soil made from decayed plants", sentence: "The garden grew well in humus.", difficulty: "normal" },
	{ word: "hydrant", definition: "a water pipe used by firefighters", sentence: "The dog sat next to the fire hydrant.", difficulty: "normal" },
	{ word: "icicle", definition: "a hanging piece of frozen water", sentence: "An icicle formed on the roof.", difficulty: "normal" },
	{ word: "igneous", definition: "formed from cooled lava or magma", sentence: "Granite is an igneous rock.", difficulty: "normal" },
	{ word: "illegally", definition: "against the law", sentence: "They parked illegally in a no‑parking zone.", difficulty: "normal" },
	{ word: "illusion", definition: "something that tricks the eyes or mind", sentence: "The magic trick was just an illusion.", difficulty: "normal" },
	{ word: "immediately", definition: "right away", sentence: "She answered the phone immediately.", difficulty: "normal" },
	{ word: "immigration", definition: "moving to a new country to live", sentence: "Immigration has shaped many cultures.", difficulty: "normal" },
	{ word: "improvise", definition: "to make something up on the spot", sentence: "He had to improvise when he forgot his lines.", difficulty: "normal" },
	{ word: "infantry", definition: "soldiers who fight on foot", sentence: "The infantry marched across the field.", difficulty: "normal" },
	{ word: "innocent", definition: "not guilty of wrongdoing", sentence: "The jury found him innocent.", difficulty: "normal" },
	{ word: "insulator", definition: "a material that blocks heat or electricity", sentence: "Rubber is an insulator.", difficulty: "normal" },
	{ word: "interesting", definition: "holding attention", sentence: "The book was very interesting.", difficulty: "normal" },
	{ word: "investigate", definition: "to look into something carefully", sentence: "The detective will investigate the case.", difficulty: "normal" },
	{ word: "Jerusalem", definition: "a historic city in the Middle East", sentence: "Many people visit Jerusalem each year.", difficulty: "normal" },
	{ word: "kinetic", definition: "related to motion", sentence: "Kinetic energy increases when you run.", difficulty: "normal" },
	{ word: "learner", definition: "someone who is learning", sentence: "She is a fast learner.", difficulty: "normal" },
	{ word: "lifeguard", definition: "a person who watches swimmers for safety", sentence: "The lifeguard blew his whistle.", difficulty: "normal" },
	{ word: "loose", definition: "not tight", sentence: "The screw was loose.", difficulty: "normal" },
	{ word: "lose", definition: "to misplace or not win", sentence: "Don’t lose your keys again.", difficulty: "normal" },
	{ word: "magnetism", definition: "the force magnets create", sentence: "Magnetism pulls metal objects.", difficulty: "normal" },
	{ word: "magnificent", definition: "very beautiful or impressive", sentence: "The view from the mountain was magnificent.", difficulty: "normal" },
	{ word: "maroon", definition: "a dark reddish‑brown color", sentence: "She wore a maroon sweater.", difficulty: "normal" },
	{ word: "mathematician", definition: "a person skilled in math", sentence: "The mathematician solved the problem quickly.", difficulty: "normal" },
	{ word: "measurement", definition: "the size or amount of something", sentence: "He took the measurement of the table.", difficulty: "normal" },
	{ word: "mediocre", definition: "average or not very good", sentence: "The movie was mediocre.", difficulty: "normal" },
	{ word: "meows", definition: "the sounds a cat makes", sentence: "The kitten meows for food.", difficulty: "normal" },
	{ word: "metamorphic", definition: "changed by heat and pressure", sentence: "Marble is a metamorphic rock.", difficulty: "normal" },
	{ word: "Michelangelo", definition: "a famous Italian artist", sentence: "Michelangelo painted the Sistine Chapel.", difficulty: "normal" },
	{ word: "mighty", definition: "strong and powerful", sentence: "The mighty river carved the canyon.", difficulty: "normal" },
	{ word: "moan", definition: "a low sound of pain or sadness", sentence: "He let out a moan after falling.", difficulty: "normal" },
	{ word: "monarchy", definition: "a government ruled by a king or queen", sentence: "The country was once a monarchy.", difficulty: "normal" },
	{ word: "neighborhood", definition: "a local area where people live", sentence: "Kids played in the neighborhood.", difficulty: "normal" },
	{ word: "nineteenth", definition: "the number 19th", sentence: "She finished in nineteenth place.", difficulty: "normal" },
	{ word: "noble", definition: "having high moral qualities", sentence: "He made a noble decision.", difficulty: "normal" },
	{ word: "noticeably", definition: "easy to see or observe", sentence: "She was noticeably taller this year.", difficulty: "normal" },
	{ word: "nourishment", definition: "food that helps you grow", sentence: "Fruit provides good nourishment.", difficulty: "normal" },
	{ word: "nugget", definition: "a small lump or piece", sentence: "He found a gold nugget.", difficulty: "normal" },
	{ word: "nuisance", definition: "something annoying", sentence: "The buzzing fly was a nuisance.", difficulty: "normal" },
	{ word: "oddly", definition: "strangely", sentence: "He was oddly quiet today.", difficulty: "normal" },
	{ word: "opossum", definition: "a small nocturnal animal", sentence: "The opossum hid in the bushes.", difficulty: "normal" },
	{ word: "opportunity", definition: "a chance to do something", sentence: "This job is a great opportunity.", difficulty: "normal" },
	{ word: "orchestra", definition: "a large group of musicians", sentence: "The orchestra played beautifully.", difficulty: "normal" },
	{ word: "ornaments", definition: "decorative objects", sentence: "They hung ornaments on the tree.", difficulty: "normal" },
	{ word: "ostrich", definition: "a large flightless bird", sentence: "The ostrich ran quickly across the field.", difficulty: "normal" },
	{ word: "overflow", definition: "to spill over the top", sentence: "The sink began to overflow.", difficulty: "normal" },
	{ word: "passengers", definition: "people traveling in a vehicle", sentence: "The passengers boarded the plane.", difficulty: "normal" },
	{ word: "pastries", definition: "sweet baked goods", sentence: "The bakery sold fresh pastries.", difficulty: "normal" },
	{ word: "permission", definition: "approval to do something", sentence: "He asked for permission to leave early.", difficulty: "normal" },
	{ word: "pizzeria", definition: "a restaurant that sells pizza", sentence: "They ate lunch at the pizzeria.", difficulty: "normal" },
	{ word: "poisonous", definition: "harmful or deadly if eaten", sentence: "Some mushrooms are poisonous.", difficulty: "normal" },
	{ word: "Polish", definition: "relating to Poland or its language", sentence: "She learned to speak Polish.", difficulty: "normal" },
	{ word: "pouch", definition: "a small bag or pocket", sentence: "The kangaroo carried its baby in a pouch.", difficulty: "normal" },
	{ word: "predicament", definition: "a difficult situation", sentence: "He was stuck in a tough predicament.", difficulty: "normal" },
	{ word: "pregnancy", definition: "the state of carrying a baby", sentence: "She announced her pregnancy.", difficulty: "normal" },
	{ word: "prehistoric", definition: "from before written history", sentence: "They found prehistoric cave drawings.", difficulty: "normal" },
	{ word: "prior", definition: "earlier or before", sentence: "He had no prior experience.", difficulty: "normal" },
	{ word: "prospective", definition: "expected or likely in the future", sentence: "They met with prospective buyers.", difficulty: "normal" },
	{ word: "proton", definition: "a positively charged particle", sentence: "A proton is found in the nucleus.", difficulty: "normal" },
	{ word: "provide", definition: "to give something needed", sentence: "They provide food for the shelter.", difficulty: "normal" },
	{ word: "quarry", definition: "a place where stone is taken from the ground", sentence: "The workers dug limestone from the quarry.", difficulty: "normal" },
	{ word: "radiation", definition: "energy that travels in waves", sentence: "The sun gives off radiation.", difficulty: "normal" },
	{ word: "radishes", definition: "small red root vegetables", sentence: "She sliced radishes for the salad.", difficulty: "normal" },
	{ word: "rafting", definition: "traveling on a river in a raft", sentence: "They went rafting down the rapids.", difficulty: "normal" },
	{ word: "ranger", definition: "a person who protects a park or forest", sentence: "The ranger guided the hikers.", difficulty: "normal" },
	{ word: "rapids", definition: "fast‑moving water in a river", sentence: "The rapids were exciting to watch.", difficulty: "normal" },
	{ word: "scholarship", definition: "money given to help pay for school", sentence: "She earned a scholarship for college.", difficulty: "normal" },
	{ word: "scratched", definition: "marked with something sharp", sentence: "The cat scratched the couch.", difficulty: "normal" },
	{ word: "scribbled", definition: "wrote quickly and messily", sentence: "He scribbled a note on the paper.", difficulty: "normal" },
	{ word: "scuba diving", definition: "swimming underwater with special gear", sentence: "They went scuba diving near the reef.", difficulty: "normal" },
	{ word: "sculptor", definition: "an artist who makes sculptures", sentence: "The sculptor shaped the clay carefully.", difficulty: "normal" },
	{ word: "sculpture", definition: "a piece of art made by carving or shaping", sentence: "The museum displayed a marble sculpture.", difficulty: "normal" },
	{ word: "sketches", definition: "quick drawings", sentence: "She made sketches of the landscape.", difficulty: "normal" },
	{ word: "sleeker", definition: "smoother and more stylish", sentence: "The new car design looks sleeker.", difficulty: "normal" },
	{ word: "smartphone", definition: "a mobile phone with advanced features", sentence: "He checked the map on his smartphone.", difficulty: "normal" },
	{ word: "spectrum", definition: "a range of colors or ideas", sentence: "The rainbow showed a full spectrum of colors.", difficulty: "normal" },
	{ word: "spherical", definition: "shaped like a ball", sentence: "The planet is nearly spherical.", difficulty: "normal" },
	{ word: "squawk", definition: "a loud, harsh bird sound", sentence: "The parrot let out a squawk.", difficulty: "normal" },
	{ word: "startled", definition: "surprised or shocked suddenly", sentence: "The loud noise startled him.", difficulty: "normal" },
	{ word: "stirrup", definition: "a foot support on a saddle", sentence: "She placed her foot in the stirrup.", difficulty: "normal" },
	{ word: "stoop", definition: "to bend forward", sentence: "He had to stoop to pick up the coin.", difficulty: "normal" },
	{ word: "struck", definition: "hit or impacted", sentence: "The ball struck the wall.", difficulty: "normal" },
	{ word: "stubborn", definition: "unwilling to change", sentence: "The donkey was stubborn and wouldn’t move.", difficulty: "normal" },
	{ word: "stylish", definition: "fashionable or trendy", sentence: "Her outfit looked very stylish.", difficulty: "normal" },
	{ word: "substitution", definition: "replacing one thing with another", sentence: "The recipe allowed a sugar substitution.", difficulty: "normal" },
	{ word: "suggested", definition: "offered an idea", sentence: "She suggested going for a walk.", difficulty: "normal" },
	{ word: "summit", definition: "the highest point of a mountain", sentence: "They reached the summit at noon.", difficulty: "normal" },
	{ word: "sunbather", definition: "someone lying in the sun", sentence: "The sunbather relaxed on the beach.", difficulty: "normal" },
	{ word: "supply", definition: "to provide something needed", sentence: "They supply water to the town.", difficulty: "normal" },
	{ word: "surrounded", definition: "enclosed on all sides", sentence: "The cabin was surrounded by trees.", difficulty: "normal" },
	{ word: "susceptible", definition: "easily affected by something", sentence: "Young plants are susceptible to frost.", difficulty: "normal" },
	{ word: "swallow", definition: "to make food go down the throat", sentence: "It was hard to swallow the large pill.", difficulty: "normal" },
	{ word: "swelling", definition: "an area that becomes larger due to injury", sentence: "The swelling on his ankle got worse.", difficulty: "normal" },
	{ word: "swirling", definition: "moving in a twisting motion", sentence: "Leaves were swirling in the wind.", difficulty: "normal" },
	{ word: "syllable", definition: "a unit of sound in a word", sentence: "‘Apple’ has two syllables.", difficulty: "normal" },
	{ word: "thermos", definition: "a container that keeps drinks hot or cold", sentence: "She poured tea into her thermos.", difficulty: "normal" },
	{ word: "thermostat", definition: "a device that controls temperature", sentence: "The thermostat turned on the heater.", difficulty: "normal" },
	{ word: "though", definition: "despite the fact", sentence: "He went outside, though it was raining.", difficulty: "normal" },
	{ word: "thoughtfully", definition: "with careful consideration", sentence: "She packed his lunch thoughtfully.", difficulty: "normal" },
	{ word: "thrilled", definition: "very excited", sentence: "He was thrilled to win the prize.", difficulty: "normal" },
	{ word: "throughout", definition: "in every part of something", sentence: "The smell spread throughout the house.", difficulty: "normal" },
	{ word: "town hall", definition: "a building for local government", sentence: "The meeting was held at the town hall.", difficulty: "normal" },
	{ word: "tremendous", definition: "very large or great", sentence: "They made tremendous progress.", difficulty: "normal" },
	{ word: "unbelievable", definition: "very hard to believe", sentence: "The magic trick was unbelievable.", difficulty: "normal" },
	{ word: "underneath", definition: "below something", sentence: "The cat hid underneath the bed.", difficulty: "normal" },
	{ word: "unexpected", definition: "surprising", sentence: "The storm was unexpected.", difficulty: "normal" },
	{ word: "unpredictable", definition: "not able to be predicted", sentence: "The weather is unpredictable.", difficulty: "normal" },
	{ word: "unwrapped", definition: "removed the wrapping", sentence: "She unwrapped her birthday gift.", difficulty: "normal" },
	{ word: "venture", definition: "a risky or daring journey", sentence: "They began a venture into the forest.", difficulty: "normal" },
	{ word: "veterinarian", definition: "an animal doctor", sentence: "The veterinarian examined the puppy.", difficulty: "normal" },
	{ word: "wacky", definition: "silly or funny", sentence: "He wore a wacky hat to the party.", difficulty: "normal" },
	{ word: "wallet", definition: "a small case for money and cards", sentence: "He lost his wallet at the store.", difficulty: "normal" },
	{ word: "weightless", definition: "having no weight", sentence: "Astronauts feel weightless in space.", difficulty: "normal" },
	{ word: "whiskers", definition: "long hairs on an animal’s face", sentence: "The cat’s whiskers twitched.", difficulty: "normal" },
	{ word: "who's", definition: "contraction of 'who is'", sentence: "Who’s coming to dinner tonight.", difficulty: "normal" },
	{ word: "whose", definition: "belonging to whom", sentence: "Whose jacket is this.", difficulty: "normal" },
	{ word: "witnesses", definition: "people who see an event", sentence: "The witnesses described what happened.", difficulty: "normal" }
	]
// You can add later:
// const grade1Words = [ ... ];


/***********************
 * STATE
 ***********************/

let remainingWords = [];
let sessionWords = [];
let wrongWords = [];
let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;
let currentWord = null;

const SWIPE_THRESHOLD = 50; // pixels


/***********************
 * INITIALIZATION
 ***********************/

function init() {
  const restored = loadState();

  if (restored && sessionWords.length > 0) {
    showWord();
  } else {
    remainingWords = [...grade6Words];
    sessionWords = [];
    wrongWords = [];
    currentIndex = 0;
    updateDisplay("Press Start");
  }
  
  const wordEl = document.getElementById("word");

  wordEl.addEventListener("touchstart", e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  wordEl.addEventListener("touchend", e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
}

window.onload = init;

function handleSwipe() {
  const deltaX = touchEndX - touchStartX;

  if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

  if (deltaX > 0) {
    markCorrect(); // swipe right
  } else {
    markWrong(); // swipe left
  }
}


/***********************
 * SESSION LOGIC
 ***********************/

function startSession(n) {
  sessionWords = [];
  currentIndex = 0;

  if (remainingWords.length === 0) {
    updateDisplay("No words left. Reset.");
    return;
  }

  for (let i = 0; i < n && remainingWords.length > 0; i++) {
    const idx = Math.floor(Math.random() * remainingWords.length);
    sessionWords.push(remainingWords.splice(idx, 1)[0]);
  }

  showWord();
  saveState();
}


/***********************
 * UI ACTIONS
 ***********************/

function markCorrect() {
  animateSwipe("right");
}

function markWrong() {
  wrongWords.push(sessionWords[currentIndex]);
  saveState();
  animateSwipe("left");
}

function nextWord() {
  currentIndex++;

  if (currentIndex >= sessionWords.length) {
    showResults();
  } else {
    showWord();
  }
  clearinfo();
  saveState();
}


/***********************
 * DISPLAY
 ***********************/

function showWord() {
  const wordEl = document.getElementById("word");
  const w = sessionWords[currentIndex];

  currentWord = w
  wordEl.style.transition = "none";
  wordEl.style.transform = "translateX(0)";
  wordEl.style.opacity = "1";
  
  wordEl.offsetHeight;
  
  wordEl.style.transition = "";
  
  updateDisplay(w.word);
  
}

function showResults() {
  if (wrongWords.length === 0) {
    updateDisplay("Perfect score! 🎉");
    return;
  }

  const list = wrongWords
    .map(w => `• ${w.word}`)
    .join("<br>");

  document.getElementById("word").innerHTML =
    "<strong>Words to review:</strong><br><br>" + list;
}

function updateDisplay(text) {
  document.getElementById("word").innerHTML = text;
}

/***********************
 * RESET
 ***********************/

function resetAll() {
  localStorage.removeItem(STORAGE_KEY);
  init();
}

/***********************
 * SAVE/RELOAD
 ***********************/


function saveState() {
  const state = {
    remainingWords,
    sessionWords,
    wrongWords,
    currentIndex,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return false;

  try {
    const state = JSON.parse(raw);
    remainingWords = state.remainingWords || [];
    sessionWords = state.sessionWords || [];
    wrongWords = state.wrongWords || [];
    currentIndex = state.currentIndex || 0;
    return true;
  } catch {
    return false;
  }
}

function animateSwipe(direction) {
  const wordEl = document.getElementById("word");

  wordEl.classList.add(direction === "right" ? "swipe-right" : "swipe-left");

  setTimeout(() => {
    wordEl.classList.remove("swipe-right", "swipe-left");
    nextWord();
  }, 250);

}

function showDefinition() {
  if (!currentWord) return;

  infoArea.innerHTML = `
    <strong>Definition:</strong><br>
    ${currentWord.definition}
  `;
}

function showSentence() {
  
  if (!currentWord) return;

  infoArea.innerHTML = `
    <strong>Sentence:</strong><br>
    ${currentWord.sentence}
  `;
}

function clearInfo() {
  infoArea.innerHTML = "";
}

