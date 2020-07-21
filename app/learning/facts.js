let regex = /[^#{\}]+(?=})/
let command = 'cp #{file.recent} #{directory.staging}'
let facts = [{key:'file.recent', value:'abc.txt'}, {key:'file.recent', value:'def.txt'}, {key:'directory.staging', value:'test/'}]

let relevant = {}
let rFacts = command.match(new RegExp(regex, 'g')) || []
rFacts.forEach(rfact => {
    let r = []
    facts.forEach(fact => {
        if(rfact === fact.key){
            r.push(fact.value)
        }
    })
    relevant[rfact] = r
})
console.log(relevant)
