ServerEvents.recipes(event => {

    const collar = Item.of('tconstruct:tough_binding', '{Material:"tconstruct:wood"}').weakNBT();
    event.remove({id:'create_armorer:attachments/grip_shaft'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"create_armorer:grip_shaft"}').strongNBT();

    event.shaped(
    atachment,
    [
      'PRP',
      'S R',
      'CSC'
    ],
    {
        P: '#forge:plates/iron',
        R: '#forge:rods/iron',
        S: 'create:shaft',
        C: collar
    })
})