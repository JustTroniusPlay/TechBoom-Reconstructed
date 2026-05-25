ServerEvents.recipes(event => {

    event.replaceInput(
        {output: "sophisticatedbackpacks:tank_upgrade"},
        "#forge:glass",
        "#forge:glass_panes"
    )

    event.replaceInput(
        {output: "sophisticatedbackpacks:pump_upgrade"},
        "#forge:glass",
        "#forge:glass_panes"
    )
})