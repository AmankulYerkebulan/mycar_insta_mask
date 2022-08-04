
const Scene = require('Scene');

export const Diagnostics = require('Diagnostics');

const Patches = require('Patches');

Promise.all([
    Scene.root.findFirst('timerText'),
]).then(function (results) {
    const timerCountText = results[0];
    Patches.outputs.getScalar('Timer').then(timerObj => {
        timerObj.monitor().subscribe(function (timerEvent) {
            if (timerEvent.newValue > 0) {
                timerCountText.text = timerEvent.newValue.toFixed(2).toString();
            }
        });
    });
});
