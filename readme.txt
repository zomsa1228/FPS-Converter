================================================================================
FPS Pro感度コンバーター - 完全版
================================================================================

【概要】
20種類以上の主要FPSゲーム間で感度設定を正確に変換するツールです。
マウス・ゲームパッド(PS5/Xbox)の両方に対応しています。

【対応ゲーム】
■ タクティカルシューター
  - Valorant (PC専用)
  - Counter-Strike 2 (PC専用)
  - Rainbow Six Siege
  - Rainbow Six Extraction
  - Escape from Tarkov (PC専用)

■ Call of Duty シリーズ
  - Modern Warfare (2019)
  - Black Ops Cold War
  - Modern Warfare II
  - Modern Warfare III
  - Black Ops 6

■ Battlefield シリーズ
  - Battlefield 1
  - Battlefield V
  - Battlefield 2042

■ バトルロイヤル/その他
  - Apex Legends
  - PUBG: Battlegrounds
  - Overwatch 2
  - The Finals
  - Marvel Rivals
  - Delta Force

【使い方】
1. index.htmlをブラウザで開く
2. 入力デバイス（マウス/PS5/Xbox）を選択
3. 元のゲームと現在の設定を入力
4. 変換先のゲームを選択
5. 「設定を変換」ボタンをクリック

【マウス設定】
- 通常感度（Hipfire）
- DPI
- FOV（視野角）
- ADS感度倍率
※ cm/360距離を基準に完全一致を実現

【ゲームパッド設定】
- 水平/垂直感度
- ADS感度倍率
- 反応曲線タイプ（リニア/ダイナミック等）
- 視点加速度
- デッドゾーン（中心/外側）
- エイムアシスト強度

【技術仕様】
- 実測Yaw値に基づく正確な計算
  - Valorant: 0.07
  - CS2/Apex/The Finals: 0.022
  - CoD/BF/OW2: 0.0066
  - R6S: 0.00572958
  - Tarkov: 0.0198

- FOVタイプ自動判定
  - 水平FOV: Valorant, CS2, CoD, BF, Apex等
  - 垂直FOV: R6S, Tarkov

- ゲームパッドスケール変換
  - CoD: 1-20スケール
  - Apex: 1-8スケール
  - その他: 0-100%スケール

【注意事項】
- ゲームパッド非対応ゲーム（Valorant, CS2, Tarkov）では
  マウスモードのみ使用可能
- 応答カーブ非対応ゲームでは警告が表示されます
- すべてローカルで動作（インターネット接続不要）

【ファイル構成】
fps-converter/
├── index.html          ← これを開く
├── readme.txt          ← このファイル
├── css/
│   └── main.css        ← スタイルシート
├── script/
│   └── main.js         ← メインロジック
└── asset/
    └── image/          ← 画像フォルダ（拡張用）

【動作環境】
- 最新版のChrome, Firefox, Edge, Safari
- JavaScript有効化必須
- インターネット接続不要（オフライン動作可能）

【更新履歴】
v1.0.0 (2025年2月)
- 初回リリース
- 20種類のゲーム対応
- マウス/ゲームパッド両対応
- 詳細設定変換機能

【製作者情報】
本ツールはWeb技術（HTML/CSS/JavaScript）のみで構築されており、
完全にオープンソースです。自由に改変・配布が可能です。

【フィードバック】
バグ報告や機能追加のリクエストは歓迎します。

================================================================================
© 2025 FPS Pro Sensitivity Converter
================================================================================