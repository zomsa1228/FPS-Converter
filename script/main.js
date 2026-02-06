let currentDevice = 'mouse';
let currentController = 'dualsense';
let styleAdjustEnabled = false;
let styleAdjustPercent = 0;

// 実際のゲームデータ（検索結果ベース）
const gameData = {
    // タクティカルシューター
    valorant: {
        name: 'Valorant',
        yaw: 0.07,
        fovType: 'horizontal',
        defaultFOV: 103,
        adsMultiplier: 1.0,
        gamepadSupport: false,
        pcOnly: true
    },
    cs2: {
        name: 'Counter-Strike 2',
        yaw: 0.022,
        fovType: 'horizontal',
        defaultFOV: 90,
        adsMultiplier: 1.0,
        gamepadSupport: false,
        pcOnly: true
    },
    r6s: {
        name: 'Rainbow Six Siege',
        yaw: 0.00572958,
        fovType: 'vertical',
        defaultFOV: 75,
        adsMultiplier: 0.5,
        gamepadHorizontal: 50,
        gamepadVertical: 50,
        gamepadScale: 'percentage',
        hasResponseCurves: true,
        aimAssistStrength: 100
    },
    r6e: {
        name: 'Rainbow Six Extraction',
        yaw: 0.00572958,
        fovType: 'vertical',
        defaultFOV: 75,
        adsMultiplier: 0.5,
        gamepadHorizontal: 50,
        gamepadVertical: 50,
        gamepadScale: 'percentage'
    },
    tarkov: {
        name: 'Escape from Tarkov',
        yaw: 0.0198,
        fovType: 'vertical',
        defaultFOV: 75,
        adsMultiplier: 1.0,
        gamepadSupport: false,
        pcOnly: true
    },
    
    // Call of Duty
    codmw2019: {
        name: 'CoD: Modern Warfare (2019)',
        yaw: 0.0066,
        fovType: 'horizontal',
        defaultFOV: 90,
        adsMultiplier: 0.75,
        gamepadHorizontal: 6,
        gamepadVertical: 6,
        gamepadScale: 'cod',
        aimAssistStrength: 100
    },
    codbocw: {
        name: 'CoD: Black Ops Cold War',
        yaw: 0.0066,
        fovType: 'horizontal',
        defaultFOV: 90,
        adsMultiplier: 0.75,
        gamepadHorizontal: 7,
        gamepadVertical: 7,
        gamepadScale: 'cod',
        aimAssistStrength: 100
    },
    codmw2: {
        name: 'CoD: Modern Warfare II',
        yaw: 0.0066,
        fovType: 'horizontal',
        defaultFOV: 90,
        adsMultiplier: 0.75,
        gamepadHorizontal: 8,
        gamepadVertical: 8,
        gamepadScale: 'cod',
        aimAssistStrength: 100
    },
    codmw3: {
        name: 'CoD: Modern Warfare III',
        yaw: 0.0066,
        fovType: 'horizontal',
        defaultFOV: 90,
        adsMultiplier: 0.75,
        gamepadHorizontal: 8,
        gamepadVertical: 8,
        gamepadScale: 'cod',
        aimAssistStrength: 100
    },
    codbo6: {
        name: 'CoD: Black Ops 6',
        yaw: 0.0066,
        fovType: 'horizontal',
        defaultFOV: 90,
        adsMultiplier: 0.75,
        gamepadHorizontal: 8,
        gamepadVertical: 8,
        gamepadScale: 'cod',
        aimAssistStrength: 100
    },
    codbo7: {
        name: 'CoD: Black Ops 7',
        yaw: 0.0066,
        fovType: 'horizontal',
        defaultFOV: 90,
        adsMultiplier: 0.75,
        gamepadHorizontal: 8,
        gamepadVertical: 8,
        gamepadScale: 'cod',
        aimAssistStrength: 100
    },

    // Battlefield
    bf1: {
        name: 'Battlefield 1',
        yaw: 0.0066,
        fovType: 'horizontal',
        defaultFOV: 90,
        adsMultiplier: 1.0,
        gamepadHorizontal: 50,
        gamepadVertical: 45,
        gamepadScale: 'percentage',
        hasVehicleSens: true,
        aimAssistStrength: 100
    },
    bfv: {
        name: 'Battlefield V',
        yaw: 0.0066,
        fovType: 'horizontal',
        defaultFOV: 90,
        adsMultiplier: 1.0,
        gamepadHorizontal: 50,
        gamepadVertical: 45,
        gamepadScale: 'percentage',
        hasVehicleSens: true,
        aimAssistStrength: 100
    },
    bf2042: {
        name: 'Battlefield 2042',
        yaw: 0.0066,
        fovType: 'horizontal',
        defaultFOV: 90,
        adsMultiplier: 1.0,
        gamepadHorizontal: 55,
        gamepadVertical: 50,
        gamepadScale: 'percentage',
        hasVehicleSens: true,
        aimAssistStrength: 100
    },
    bf6: {
        name: 'Battlefield 6',
        yaw: 0.0066,
        fovType: 'horizontal',
        defaultFOV: 90,
        adsMultiplier: 1.0,
        gamepadHorizontal: 60,
        gamepadVertical: 55,
        gamepadScale: 'percentage',
        hasVehicleSens: true,
        hasResponseCurves: true,
        aimAssistStrength: 100
    },

    // バトロワ/その他
    apex: {
        name: 'Apex Legends',
        yaw: 0.022,
        fovType: 'horizontal',
        defaultFOV: 90,
        adsMultiplier: 1.0,
        gamepadHorizontal: 5,
        gamepadVertical: 4,
        gamepadScale: 'apex',
        hasResponseCurves: true,
        aimAssistStrength: 60
    },
    pubg: {
        name: 'PUBG: Battlegrounds',
        yaw: 0.0066,
        fovType: 'horizontal',
        defaultFOV: 90,
        adsMultiplier: 1.0,
        gamepadHorizontal: 50,
        gamepadVertical: 50,
        gamepadScale: 'percentage',
        aimAssistStrength: 100
    },
    overwatch2: {
        name: 'Overwatch 2',
        yaw: 0.0066,
        fovType: 'horizontal',
        defaultFOV: 103,
        adsMultiplier: 0.3789,
        gamepadHorizontal: 30,
        gamepadVertical: 25,
        gamepadScale: 'percentage',
        aimAssistStrength: 100
    },
    thefinals: {
        name: 'The Finals',
        yaw: 0.022,
        fovType: 'horizontal',
        defaultFOV: 100,
        adsMultiplier: 1.0,
        gamepadHorizontal: 50,
        gamepadVertical: 50,
        gamepadScale: 'percentage',
        aimAssistStrength: 80
    },
    marvelrivals: {
        name: 'Marvel Rivals',
        yaw: 0.0066,
        fovType: 'horizontal',
        defaultFOV: 103,
        adsMultiplier: 1.0,
        gamepadHorizontal: 30,
        gamepadVertical: 30,
        gamepadScale: 'percentage',
        aimAssistStrength: 100
    },
    deltaforce: {
        name: 'Delta Force',
        yaw: 0.0066,
        fovType: 'horizontal',
        defaultFOV: 90,
        adsMultiplier: 1.0,
        gamepadHorizontal: 50,
        gamepadVertical: 50,
        gamepadScale: 'percentage',
        aimAssistStrength: 100
    }
};

function selectDevice(device) {
    currentDevice = device;
    document.querySelectorAll('.device-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${device}`).classList.add('active');

    const isController = device === 'controller';
    
    // コントローラー選択セクションの表示/非表示
    document.getElementById('controller-type-selector').classList.toggle('hidden', !isController);
    
    // 設定セクションの表示切り替え
    document.getElementById('mouse-settings-source').classList.toggle('hidden', isController);
    document.getElementById('gamepad-settings-source').classList.toggle('hidden', !isController);
    document.getElementById('mouse-target-settings').classList.toggle('hidden', isController);
    document.getElementById('gamepad-target-settings').classList.toggle('hidden', !isController);
    
    // ゲームリストの更新（グレーアウト処理）
    updateGameListAvailability();
}

function updateGameListAvailability() {
    const isController = currentDevice === 'controller';
    const sourceSelect = document.getElementById('sourceGame');
    const targetSelect = document.getElementById('targetGame');
    
    [sourceSelect, targetSelect].forEach(select => {
        Array.from(select.options).forEach(option => {
            if (option.value) {
                const game = gameData[option.value];
                if (game) {
                    if (isController && (game.gamepadSupport === false || game.pcOnly)) {
                        option.disabled = true;
                        option.textContent = game.name + ' (コントローラー非対応)';
                    } else {
                        option.disabled = false;
                        option.textContent = game.name;
                    }
                }
            }
        });
    });
}

function updateSliderValue(id) {
    const slider = document.getElementById(id);
    const display = document.getElementById(id + 'Value');
    display.textContent = slider.value;
}

function updatePercentValue(id) {
    const slider = document.getElementById(id);
    const display = document.getElementById(id + 'Value');
    display.textContent = slider.value + '%';
}

function updateGameDefaults(prefix) {
    const game = document.getElementById(prefix + 'Game').value;
    const gameInfo = gameData[game];
    
    if (currentDevice === 'mouse') {
        document.getElementById(prefix + 'ADS').value = gameInfo.adsMultiplier;
        document.getElementById(prefix + 'FOV').value = gameInfo.defaultFOV;
    }
}

function calculate360Distance(sensitivity, dpi, yaw, fov = 90, fovType = 'horizontal') {
    let fovMultiplier;
    if (fovType === 'vertical') {
        fovMultiplier = Math.tan((fov * Math.PI / 180) / 2) / Math.tan((75 * Math.PI / 180) / 2);
    } else {
        fovMultiplier = Math.tan((fov * Math.PI / 180) / 2) / Math.tan((90 * Math.PI / 180) / 2);
    }
    
    const distance = 360 / (sensitivity * dpi * yaw * fovMultiplier);
    return distance;
}

function convertSettings() {
    const sourceGame = document.getElementById('sourceGame').value;
    const targetGame = document.getElementById('targetGame').value;
    const sourceGameData = gameData[sourceGame];
    const targetGameData = gameData[targetGame];

    // ゲームパッド非対応チェック
    if (currentDevice === 'controller') {
        if (targetGameData.gamepadSupport === false || targetGameData.pcOnly) {
            showError(`${targetGameData.name}はコントローラーに対応していません。\nマウス/キーボードモードに切り替えてください。`);
            return;
        }
    }

    if (currentDevice === 'mouse') {
        convertMouseSettings(sourceGameData, targetGameData);
    } else {
        convertGamepadSettings(sourceGameData, targetGameData);
    }
}

function convertMouseSettings(source, target) {
    const sourceSens = parseFloat(document.getElementById('sourceSens').value);
    const sourceDPI = parseFloat(document.getElementById('sourceDPI').value);
    const sourceFOV = parseFloat(document.getElementById('sourceFOV').value);
    const targetDPI = parseFloat(document.getElementById('targetDPI').value);
    const targetFOV = parseFloat(document.getElementById('targetFOV').value);
    const sourceADS = parseFloat(document.getElementById('sourceADS').value);

    if (!sourceSens || !sourceDPI || !targetDPI || !sourceFOV || !targetFOV) {
        alert('全ての項目を入力してください');
        return;
    }

    // cm/360計算
    const source360 = calculate360Distance(sourceSens, sourceDPI, source.yaw, sourceFOV, source.fovType);

    // 変換先感度計算
    let targetFovMultiplier;
    if (target.fovType === 'vertical') {
        targetFovMultiplier = Math.tan((targetFOV * Math.PI / 180) / 2) / Math.tan((75 * Math.PI / 180) / 2);
    } else {
        targetFovMultiplier = Math.tan((targetFOV * Math.PI / 180) / 2) / Math.tan((90 * Math.PI / 180) / 2);
    }
    
    let convertedSens = 360 / (source360 * targetDPI * target.yaw * targetFovMultiplier);
    
    // スタイル調整の適用
    if (styleAdjustEnabled) {
        const adjustMultiplier = 1 + (styleAdjustPercent / 100);
        convertedSens *= adjustMultiplier;
    }
    
    const convertedADS = (sourceADS / source.adsMultiplier) * target.adsMultiplier;
    const eDPI = convertedSens * targetDPI;

    displayMouseResults(target, convertedSens, convertedADS, source360, eDPI);
}

function convertGamepadSettings(source, target) {
    const sourceHorizontal = parseFloat(document.getElementById('sourceHorizontalSens').value);
    const sourceVertical = parseFloat(document.getElementById('sourceVerticalSens').value);
    const sourceADS = parseFloat(document.getElementById('sourceADSGamepad').value);
    const sourceResponseCurve = document.getElementById('sourceResponseCurve').value;
    const sourceAcceleration = parseFloat(document.getElementById('sourceAcceleration').value);
    const sourceDeadzone = parseFloat(document.getElementById('sourceDeadzone').value);
    const sourceOuterDeadzone = parseFloat(document.getElementById('sourceOuterDeadzone').value);
    const sourceAimAssist = parseFloat(document.getElementById('sourceAimAssist').value);

    // スケール変換
    let convertedH, convertedV;
    
    if (source.gamepadScale === target.gamepadScale) {
        convertedH = sourceHorizontal;
        convertedV = sourceVertical;
    } else {
        const normalized = sourceHorizontal / 100;
        if (target.gamepadScale === 'cod') {
            convertedH = Math.round(normalized * 19 + 1);
            convertedV = Math.round((sourceVertical / 100) * 19 + 1);
        } else if (target.gamepadScale === 'apex') {
            convertedH = Math.round(normalized * 7 + 1);
            convertedV = Math.round((sourceVertical / 100) * 7 + 1);
        } else {
            if (source.gamepadScale === 'cod') {
                convertedH = Math.round(((sourceHorizontal - 1) / 19) * 100);
                convertedV = Math.round(((sourceVertical - 1) / 19) * 100);
            } else if (source.gamepadScale === 'apex') {
                convertedH = Math.round(((sourceHorizontal - 1) / 7) * 100);
                convertedV = Math.round(((sourceVertical - 1) / 7) * 100);
            }
        }
    }
    
    // スタイル調整の適用
    if (styleAdjustEnabled) {
        const adjustMultiplier = 1 + (styleAdjustPercent / 100);
        convertedH = Math.round(convertedH * adjustMultiplier);
        convertedV = Math.round(convertedV * adjustMultiplier);
        
        // 範囲制限
        if (target.gamepadScale === 'cod') {
            convertedH = Math.max(1, Math.min(20, convertedH));
            convertedV = Math.max(1, Math.min(20, convertedV));
        } else if (target.gamepadScale === 'apex') {
            convertedH = Math.max(1, Math.min(8, convertedH));
            convertedV = Math.max(1, Math.min(8, convertedV));
        } else {
            convertedH = Math.max(1, Math.min(100, convertedH));
            convertedV = Math.max(1, Math.min(100, convertedV));
        }
    }

    displayGamepadResults(target, convertedH, convertedV, sourceADS, sourceResponseCurve, 
                         sourceAcceleration, sourceDeadzone, sourceOuterDeadzone, sourceAimAssist);
}

function displayMouseResults(game, sens, ads, cm360, edpi) {
    const resultContent = document.getElementById('resultContent');
    
    let adjustmentInfo = '';
    if (styleAdjustEnabled && styleAdjustPercent !== 0) {
        const sign = styleAdjustPercent > 0 ? '+' : '';
        adjustmentInfo = `
            <div class="info-box" style="background: rgba(102, 126, 234, 0.2); border-left-color: #667eea;">
                <strong>🎯 スタイル調整適用済み</strong><br>
                調整値: ${sign}${styleAdjustPercent}%
            </div>
        `;
    }
    
    resultContent.innerHTML = `
        <div class="result-card">
            <div class="game-name">${game.name}</div>
            
            ${adjustmentInfo}
            
            <div class="setting-section">
                <div class="setting-section-title">🎯 基本感度</div>
                <div class="setting-row">
                    <span class="setting-label">通常感度:</span>
                    <span class="setting-value">${sens.toFixed(3)}</span>
                </div>
                <div class="setting-row">
                    <span class="setting-label">ADS感度倍率:</span>
                    <span class="setting-value">${ads.toFixed(3)}</span>
                </div>
                <div class="setting-row">
                    <span class="setting-label">eDPI:</span>
                    <span class="setting-value">${edpi.toFixed(0)}</span>
                </div>
            </div>

            <div class="setting-section">
                <div class="setting-section-title">📏 360度回転距離</div>
                <div class="setting-row">
                    <span class="setting-label">cm/360:</span>
                    <span class="setting-value">${cm360.toFixed(2)} cm</span>
                </div>
                <div class="setting-row">
                    <span class="setting-label">inch/360:</span>
                    <span class="setting-value">${(cm360 / 2.54).toFixed(2)} inches</span>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function displayGamepadResults(game, h, v, ads, curve, accel, deadzone, outerDeadzone, aimAssist) {
    const resultContent = document.getElementById('resultContent');
    
    // 選択されているコントローラーを取得
    const controllerType = document.getElementById('controllerType');
    const controllerName = controllerType.options[controllerType.selectedIndex].text;
    
    let adjustmentInfo = '';
    if (styleAdjustEnabled && styleAdjustPercent !== 0) {
        const sign = styleAdjustPercent > 0 ? '+' : '';
        adjustmentInfo = `
            <div class="info-box" style="background: rgba(102, 126, 234, 0.2); border-left-color: #667eea;">
                <strong>🎯 スタイル調整適用済み</strong><br>
                調整値: ${sign}${styleAdjustPercent}%
            </div>
        `;
    }
    
    let curveWarning = '';
    if (!game.hasResponseCurves && curve !== 'standard') {
        curveWarning = `
            <div class="warning-box">
                ⚠️ このゲームは応答カーブ設定に対応していません。<br>
                デフォルトのカーブが使用されます。
            </div>
        `;
    }

    resultContent.innerHTML = `
        <div class="result-card">
            <div class="game-name">${game.name}</div>
            <div style="text-align: center; opacity: 0.8; margin-bottom: 15px;">
                使用コントローラー: ${controllerName}
            </div>
            
            ${adjustmentInfo}
            ${curveWarning}

            <div class="setting-section">
                <div class="setting-section-title">🎯 基本感度</div>
                <div class="setting-row">
                    <span class="setting-label">水平感度:</span>
                    <span class="setting-value">${h}</span>
                </div>
                <div class="setting-row">
                    <span class="setting-label">垂直感度:</span>
                    <span class="setting-value">${v}</span>
                </div>
                <div class="setting-row">
                    <span class="setting-label">ADS倍率:</span>
                    <span class="setting-value">${ads.toFixed(2)}</span>
                </div>
            </div>

            <div class="setting-section">
                <div class="setting-section-title">📈 応答カーブ</div>
                <div class="setting-row">
                    <span class="setting-label">反応曲線:</span>
                    <span class="setting-value">${curve}</span>
                </div>
                <div class="setting-row">
                    <span class="setting-label">視点加速度:</span>
                    <span class="setting-value">${accel}%</span>
                </div>
            </div>

            <div class="setting-section">
                <div class="setting-section-title">🎮 デッドゾーン</div>
                <div class="setting-row">
                    <span class="setting-label">中心デッドゾーン:</span>
                    <span class="setting-value">${deadzone}%</span>
                </div>
                <div class="setting-row">
                    <span class="setting-label">外側デッドゾーン:</span>
                    <span class="setting-value">${outerDeadzone}%</span>
                </div>
            </div>

            <div class="setting-section">
                <div class="setting-section-title">🎯 エイムアシスト</div>
                <div class="setting-row">
                    <span class="setting-label">アシスト強度:</span>
                    <span class="setting-value">${aimAssist}%</span>
                </div>
                <div class="setting-row">
                    <span class="setting-label">推奨値:</span>
                    <span class="setting-value">${game.aimAssistStrength || 100}%</span>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function showError(message) {
    const resultContent = document.getElementById('resultContent');
    resultContent.innerHTML = `
        <div class="error-box">
            <strong>⚠️ エラー</strong><br>
            ${message.replace(/\n/g, '<br>')}
        </div>
    `;
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function toggleStyleAdjust() {
    const checkbox = document.getElementById('enableStyleAdjust');
    const content = document.getElementById('styleAdjustContent');
    styleAdjustEnabled = checkbox.checked;
    content.classList.toggle('hidden', !styleAdjustEnabled);
}

function applyTemplate(value) {
    const slider = document.getElementById('styleAdjustSlider');
    if (value === 'custom') {
        // カスタム選択時は現在のスライダー値を維持
        return;
    }
    slider.value = value;
    updateStyleAdjustValue();
}

function updateStyleAdjustValue() {
    const slider = document.getElementById('styleAdjustSlider');
    const display = document.getElementById('styleAdjustValue');
    const value = parseInt(slider.value);
    styleAdjustPercent = value;
    
    const sign = value > 0 ? '+' : '';
    display.textContent = sign + value + '%';
    
    // カスタムラジオボタンを選択
    const radios = document.getElementsByName('styleTemplate');
    let matchFound = false;
    radios.forEach(radio => {
        if (radio.value === value.toString()) {
            radio.checked = true;
            matchFound = true;
        }
    });
    
    if (!matchFound) {
        // 既定値と一致しない場合はカスタムを選択
        radios.forEach(radio => {
            if (radio.value === 'custom') {
                radio.checked = true;
            }
        });
    }
}

// 初期化
window.onload = function() {
    updateGameDefaults('source');
    updateSliderValue('sourceHorizontalSens');
    updateSliderValue('sourceVerticalSens');
    updatePercentValue('sourceAcceleration');
    updatePercentValue('sourceDeadzone');
    updatePercentValue('sourceOuterDeadzone');
    updatePercentValue('sourceAimAssist');
    updateGameListAvailability();
};