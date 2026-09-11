ServerEvents.recipes(event => {

    //40.000 FE
    let low_gems = 
    [
      'yellow_garnet', 'grossular', 'apatite',
      'red_garnet', 'spessartine', 'pyrope',
      'olivine', 'almandine', 'sodalite',
      'lazurite'
    ]
    low_gems.forEach(gem => {
      event.recipes.thermal.lapidary_fuel("#forge:gems/" + gem).energy(40000)
    });

    //125.000 FE
    let good_gems = 
    [
      'opal', 'malachite', 'blue_topaz', 
      'certus_quartz', 'cinnabar', 'monazite',
      'quartzite', 'realgar'
    ]
    good_gems.forEach(gem => {
      event.recipes.thermal.lapidary_fuel("#forge:gems/" + gem).energy(125000)
    });

    //500.000 FE
    let high_gems = 
    [
      'topaz', 'green_sapphire'
    ]
    high_gems.forEach(gem => {
      event.recipes.thermal.lapidary_fuel("#forge:gems/" + gem).energy(500000)
    });

    //1.000.000 FE
    let excep_gems = 
    [
      'rutile', 'andradite', 'uvarovite'
    ]
    excep_gems.forEach(gem => {
      event.recipes.thermal.lapidary_fuel("#forge:gems/" + gem).energy(1000000)
    });
})