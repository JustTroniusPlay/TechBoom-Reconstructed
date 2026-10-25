// kubejsstudio item tooltips; edit in Studio since this file is regenerated from the appearance manifest
function place(lines, plan, end) {
    let at = lines.size()
    for (let i = 0; i < lines.size(); i++) {
        let c = lines.get(i).getContents()
        if (c.getKey && String(c.getKey()).startsWith('item.modifiers.')) {
            at = i > 0 && String(lines.get(i - 1).getString()) == '' ? i - 1 : i
            break
        }
    }
    let resolved = plan.map(p => [Math.min(p[0] < 0 ? at : p[0], lines.size()), p[1]])
    let idxs = []
    for (let p of resolved) if (idxs.indexOf(p[0]) < 0) idxs.push(p[0])
    idxs.sort((a, b) => b - a)
    for (let i of idxs) {
        let group = []
        for (let p of resolved) if (p[0] == i) group = group.concat(p[1])
        for (let j = group.length - 1; j >= 0; j--) lines.add(i, group[j])
    }
    end.forEach(l => lines.add(l))
}
ItemEvents.tooltip(event => {
    event.addAdvanced('gtceu:block_casting_mold', (item, advanced, lines) => place(lines, [[2, [Text.of('Can be used in Forestry Thermionic Fabricator as mold')]]], []))
})
