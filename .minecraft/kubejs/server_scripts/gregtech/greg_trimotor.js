ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler('techboom:trimotor_gregtech')
    .itemInputs(
        '1x immersive_aircraft:bamboo_hopper',
        '3x gtceu:mv_electric_motor',
        '16x immersiveengineering:sheetmetal_aluminum',
        '8x gtceu:manganese_foil',
        '16x gtceu:wrought_iron_plate',
        '8x gtceu:double_iron_plate',
        '16x gtceu:treated_wood_plate',
        '4x gtceu:wood_crate',
        '6x gtceu:steel_turbine_blade'
        )
    .itemOutputs('1x civilian_aviation:trimotor_white')
    .duration(1200)
    .EUt(32)
})