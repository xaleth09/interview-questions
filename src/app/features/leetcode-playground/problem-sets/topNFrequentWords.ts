export const topNFrequentWords = {
    name: "topNFrequentWords()",
    instructions: 'Given a paragraph string and an integer N, write a function n_frequent_words that returns the top N frequent words in the posting and the frequencies for each word.\n',
    tests: [
        {
            params: {
                n: 3,
                paragraph: 'Herbal sauna uses the healing properties of herbs in combination with distilled water. The water evaporates and distributes the effect of the herbs throughout the room. A visit to the herbal sauna can cause real miracles, especially for colds.'
            },
            expectedResult: ['the', 'herbal', 'sauna']
        },
    ],
    problemSetFunction: ({n, paragraph}: { n: number, paragraph: string }) => {
        let wordCountMap: { [word: string]: number } = {}

        for (let word of paragraph.split(' ')) {
            let standardizedWord = word.toLowerCase();
            if (!wordCountMap.hasOwnProperty(standardizedWord)) {
                wordCountMap[standardizedWord] = 1;
            } else {
                wordCountMap[standardizedWord] += 1;
            }
            console.log(`${standardizedWord}: ${wordCountMap[standardizedWord]}`);
        }

        console.log(wordCountMap);

        return '/shrug';
    }
}
