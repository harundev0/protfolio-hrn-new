import type en from './en';
import type { Milestone } from './en';

const ja: typeof en = {
  meta: {
    title: 'Harun Bahrudin — プロダクト / UI/UX / フロントエンドエンジニア',
    description:
      'インドネシアのプロダクト / UI/UX / フロントエンドエンジニア、Harun Bahrudin。経験は7年。フルタイム・パートタイムの仕事を探しています（出社・ハイブリッド・リモート）。',
    aboutTitle: '自己紹介 — Harun Bahrudin',
    aboutDescription:
      '職歴、学歴、仕事の進め方。GoThru で7年、360° バーチャルツアーと Google ストリートビューの製品をデザイン・開発しています。'
  },
  nav: {
    home: 'ホーム',
    work: '制作実績',
    expertise: '専門分野',
    about: '自己紹介',
    stack: '技術',
    contact: '連絡先',
    resume: '履歴書',
    getInTouch: 'お問い合わせ',
    active: '表示中',
    toggleMenu: 'メニューを開閉',
    toggleTheme: 'テーマを切り替え',
    language: '言語',
    homeAria: 'ホーム',
    skip: '本文へスキップ'
  },
  ruler: {
    portfolio: 'ポートフォリオ',
    aboutTag: '自己紹介 // Harun',
    position: 'ページ位置',
    home: {
      projects: { label: '制作実績', sub: '厳選した仕事' },
      work: { label: '専門分野', sub: 'プロダクト · UI/UX · フロントエンド' },
      about: { label: 'アプローチ', sub: '仕事の進め方' },
      proof: { label: '技術', sub: '日常のツール' },
      contact: { label: '連絡先', sub: 'お問い合わせ' }
    },
    aboutPage: {
      chronicles: { label: 'ストーリー', sub: 'ここまでの道のり' },
      experience: { label: '経歴', sub: '職務経歴' },
      curation: { label: '進め方', sub: '一緒に働くとき' },
      collab: { label: '連絡先', sub: 'お問い合わせ' }
    }
  },
  hero: {
    titlePre: 'Web プロダクトを',
    titleEm: 'デザインして、つくる。',
    body: 'プロダクトエンジニア、UI/UX エンジニア、フロントエンドエンジニアとして7年の経験があります。Figma での最初のスケッチから、本番で動くコードまでを担当します。',
    ctaPrimary: '制作実績を見る',
    ctaSecondary: '自己紹介'
  },
  work: {
    eyebrow: '制作実績',
    eyebrowRight: 'GoThru · 2019–現在',
    titlePre: '',
    titleEm: 'デザインした',
    titlePost: 'プロダクト。',
    body: '私がデザインした GoThru のプロダクトの画面です。モック内のコンテンツはダミーです。',
    role: '役割',
    roleVal: 'UI/UX デザイン',
    items: [
      { name: 'Panorra 360', kind: 'Web アプリ', desc: '360° 写真のための SNS フィード。投稿を開いたまま、ウルトラワイドからリトルプラネットまで 6 つの表示モードを切り替えられます。', alt: '360° 写真ビューアと表示モードメニューのある Panorra 360 の Web フィード' },
      { name: 'Panorra 360', kind: 'モバイルアプリ', desc: '同じフィードをスマートフォンで。For You・Recent・Map のタブ、全画面ビューア、投稿ごとのコメント。', alt: 'Panorra 360 モバイルアプリの 3 画面：フィード、投稿詳細、全画面ビューア' },
      { name: 'GoThru Dashboard', kind: 'Web · モバイル', desc: 'お客様がバーチャルツアーを管理する画面。検索、ハッシュタグでの絞り込み、複数選択、ツアーごとの公開ステータス。', alt: 'ダークモードの GoThru Dashboard「My Tours」画面（デスクトップとモバイル）' },
      { name: 'GoThru 360 · ファイルマネージャー', kind: 'Web アプリ', desc: 'パノラマ写真のフォルダを見て回り、編集やアップロードの前に、位置マップ付きの 360° ビューアで 1 枚ずつ確認できます。', alt: 'パノラマ写真の一覧とボロブドゥール寺院の 360° プレビューがある GoThru のファイルマネージャー' }
    ]
  },
  expertise: {
    eyebrow: '私の仕事',
    eyebrowRight: 'プロダクト · UI/UX · フロントエンド',
    titlePre: 'デザインもコードも、',
    titleEm: 'ひとりで',
    titlePost: '。',
    body: '多くのチームでは、ひとつの機能がプロダクト、デザイン、フロントエンドと順番に渡され、そのたびに何かが抜け落ちます。私はその三つをまとめて担当するので、やり直しが減り、最後になって慌てることも少なくなります。',
    cards: [
      { category: 'プロダクトエンジニアリング', title: 'アイデアを機能にする', body: 'ざっくりしたアイデアから、本当につくるべきものを整理し、リリースまで責任を持って進めます。' },
      { category: 'UI/UX エンジニアリング', title: 'コードにしても崩れないデザイン', body: 'Figma でフローや画面を設計し、自分で実装します。モックでは省かれがちな読み込み中・空・エラーの状態もつくります。' },
      { category: 'フロントエンドエンジニアリング', title: '触りやすいコード', body: 'TypeScript を使った Svelte か React。小さなコンポーネントに分けて、次に触る人が迷わないようにします。' },
      { category: 'パフォーマンス', title: 'すぐに表示されるページ', body: 'バンドルは小さく、アニメーションは滑らかに。リリース前には表示速度を確認します。' }
    ]
  },
  approach: {
    eyebrow: 'アプローチ',
    eyebrowRight: '仕事の進め方',
    titlePre: '',
    titleEm: '長く使える',
    titlePost: 'ものを。',
    body: '自分が引き継いでもうれしいコードを書きます。わかりやすい名前、シンプルな構造、そして「なぜそうしたか」のメモ。',
    principles: [
      { title: '保守しやすく', body: '厳密な型、はっきりしたレイヤーの境目、ひとつの役割だけを持つコンポーネント。' },
      { title: 'どの画面でも滑らかに', body: 'レイアウトとアニメーションは、スマートフォンでもタブレットでも大きなモニターでも快適に動くようにつくります。' },
      { title: '最初からアクセシブルに', body: 'セマンティックな HTML、キーボード操作、読みやすいコントラストは最初から入れます。' }
    ]
  },
  stack: {
    eyebrow: '技術',
    eyebrowRight: '日常のツール',
    titlePre: '',
    titleEm: '使っている',
    titlePost: '技術。',
    body: '毎日使っているツールです。型安全性、小さなバンドル、軽快な画面のために選んでいます。',
    tools: [
      { role: 'メインフレームワーク', desc: 'いつもの第一候補。書くコードも、配信するコードも少なくて済みます。' },
      { role: 'UI コンポーネント', desc: 'すでに React で動いているチームやコードベース向け。' },
      { role: '型安全性', desc: 'プルリクエストを出す前に、多くのバグを見つけてくれます。' },
      { role: 'デザインシステム', desc: '余白、色、文字をアプリ全体でそろえるために。' },
      { role: 'モーション', desc: 'タイミングを細かく調整したいアニメーションに。' }
    ]
  },
  contact: {
    eyebrow: 'フルタイム・パートタイムの仕事を探しています',
    titlePre: '採用、または',
    titleEm: 'プロジェクト',
    titlePost: 'のご相談はありますか？',
    body: 'プロダクト、UI/UX、フロントエンドの採用をお考えの方も、プロジェクトのご相談も、短いメッセージをお送りください。出社・ハイブリッド・リモートのいずれも可能で、転居もできます。',
    email: 'メールを送る',
    github: 'GitHub',
    top: 'トップへ戻る'
  },
  footer: {
    stripLeft: 'Harun Bahrudin // ポートフォリオ',
    stripAvailable: '出社・ハイブリッド・リモート可',
    stripTimezone: 'インドネシア (UTC+7)',
    bio: 'インドネシアのプロダクト / UI/UX / フロントエンドエンジニア。細部を大切にするチームと、Web アプリをデザインしてつくっています。',
    based: 'インドネシア・スバン在住 // 転居可',
    navTitle: 'ナビゲーション',
    navLinks: ['ホーム', '制作実績', '専門分野', '自己紹介', '技術スタック', '連絡先'],
    navFoot: 'サイト索引',
    toolsTitle: 'ツールチェーン',
    toolsFoot: '愛用ツール',
    aboutTitle: '自己紹介',
    aboutLinks: ['ストーリー', '経歴', '一緒に働くとき', '原則'],
    aboutFoot: 'Harun について',
    connectTitle: 'つながる',
    resume: '履歴書 (PDF)',
    email: 'メール',
    connectFoot: 'お問い合わせ',
    rights: 'All rights reserved',
    builtWith: 'SvelteKit で構築'
  },
  about: {
    eyebrow: '00 / 自己紹介',
    eyebrowMeta: 'Harun Bahrudin // プロダクト · UI/UX · フロントエンド',
    titlePre: 'デザイナーであり、',
    titleEm: 'エンジニア',
    titlePost: '。',
    intro: [
      'カナダのクリエイティブ・テック業界で、リモートで7年間働いてきたプロダクトエンジニアです。UI/UX デザインとフロントエンド開発が重なるところで仕事をしています。プロダクトは、ユーザーがたどっていく物語のようなものだと考えています。まずユーザーの視点で流れを設計し、同じ丁寧さでコードにする。アイデアと実際に使われるものの間で、何も抜け落ちないようにするためです。',
      'Web、モバイル、デスクトップにまたがり、数百万人が使うプロダクトに関わってきました。デザインも実装も自分でできるので、複雑なワークフローを、使いやすく技術的にもしっかりした画面に変えられます。'
    ],
    openToWork: 'フルタイム・パートタイムの仕事を募集中',
    languages: '英語（ビジネスレベル）· インドネシア語（母語）',
    timezone: 'タイムゾーン: インドネシア (UTC+7)',
    statusFocus: '領域: プロダクト · UI/UX · フロントエンド',
    highlights: {
      title: 'ハイライト',
      items: [
        { stat: '5/5', label: 'クライアント満足度', text: '数百件のクロスプラットフォーム案件で達成。長期の協業につながったクライアントも多くいます。' },
        { stat: '70%', label: 'ハンドオフを短縮', text: 'Figma とコードの両方で運用するデザインシステムで、デザインから開発への引き渡しを短くし、プロダクト全体の一貫性を保っています。' },
        { stat: '#1', label: '公開24時間でエンゲージメント1位', text: '企画から実装まで自分が主導したリデザインが、公開から24時間以内にユーザーエンゲージメントで1位になり、旧バージョンを大きく上回りました。' },
        { stat: 'マルチプラットフォーム', label: 'デスクトップと SNS', text: 'デスクトップアプリと SNS プラットフォームで、ブランドメッセージをそろえつつ、印象に残るビジュアルを届けてきました。' }
      ]
    },
    story: {
      eyebrow: 'ストーリー',
      eyebrowRight: 'ここまでの道のり',
      bannerLabel: 'ワークスペース // Build • Design • Ship',
      bannerAltLight: '昼間の Harun Bahrudin のワークスペース',
      bannerAltDark: '夜の Harun Bahrudin のワークスペース',
      caption: 'Fig 00 // Harun のワークスペース',
      roles: 'Product Engineer • UI/UX Engineer • Frontend Engineer',
      titlePre: '',
      titleEm: 'ここまでの',
      titlePost: '道のり。',
      body: 'デザイナーのように考え、エンジニアのように形にできる人を大切にするチームに加わりたいと思っています。意味のあるものをつくっているなら、ぜひ話しましょう。',
      chapter: 'Chapter',
      chapters: [
        {
          title: 'きっかけはブラウザ',
          tag: 'はじまり',
          narrative:
            '独学の開発者によくあるように、私も最初は Web サイトがどう動いているのか知りたかっただけでした。DevTools を開いて、公開中のページの CSS を少し変えてみたら、すぐに見た目が変わった。それですっかりハマりました。',
          specs: [
            { label: '出発点', val: 'ブラウザの DevTools' },
            { label: '最初のツール', val: 'HTML、CSS、JavaScript' },
            { label: '一番の学び', val: '「要素を検証」は超能力' }
          ],
          specimenTitle: 'Fig 01 // 最初の実験',
          specimenSubtitle: 'マークアップ・スタイル・構文'
        },
        {
          title: 'ブラウザの仕組みを学ぶ',
          tag: 'もう一歩深く',
          narrative:
            'プロジェクトが大きくなるにつれて、CSS の小技では解決できない問題にぶつかるようになりました。遅いページ、カクつくスクロール、小さな画面で崩れるレイアウト。そこで、レイアウトとレンダリングが実際にどう動くのか、画面を速くアクセシブルに保つにはどうすればいいのかを学びました。',
          specs: [
            { label: 'マイルストーン', val: '初めての本番アプリ' },
            { label: 'ツールチェーン', val: 'TypeScript + コンポーネントライブラリ' },
            { label: '大切にしていること', val: 'パフォーマンスも機能のひとつ' }
          ],
          specimenTitle: 'Fig 02 // レイアウトとレンダリング',
          specimenSubtitle: '設計上の制約としてのパフォーマンス'
        },
        {
          title: 'プロダクト全体を気にかける',
          tag: 'オーナーシップ',
          narrative:
            'あるときから、チケットに書かれたものだけをつくるのをやめました。その機能がなぜ必要なのかを聞き、使っていない依存関係を消し、キーボードでも操作できるかを確かめる。そうするうちに、プロダクトが目に見えて良くなりました。',
          specs: [
            { label: 'アーキテクチャ', val: 'はっきり分かれたレイヤー' },
            { label: 'フォーカス', val: 'プロダクトエンジニアリングと UX' },
            { label: '心がけ', val: '必要なものだけをつくる' }
          ],
          specimenTitle: 'Fig 03 // システムとトークン',
          specimenSubtitle: 'デザインシステムのトークン設計'
        },
        {
          title: '今やっていること',
          tag: '現在',
          narrative:
            '今は、プロダクトのロジックと画面づくりの両方を、主に Svelte と React でやっています。仕事の外では、新しいツールを試したり、タイポグラフィの本を読んだり、画面のアイデアをスケッチしたりしています。',
          specs: [
            { label: 'ステータス', val: 'フルタイム・パートタイムの仕事を募集中' },
            { label: 'タイムゾーン', val: 'インドネシア / UTC+7' },
            { label: '目標', val: '気持ちよく使えるソフトウェア' }
          ],
          specimenTitle: 'Fig 04 // 今のワークスペース',
          specimenSubtitle: 'プロダクト · UI/UX · フロントエンド'
        }
      ]
    },
    experience: {
      eyebrow: '経歴',
      eyebrowRight: '職歴と学歴',
      titlePre: '',
      titleEm: 'これまでの',
      titlePost: '仕事。',
      body: '2019年11月から、カナダの企業 GoThru でリモートで働いています。360° バーチャルツアーと Google ストリートビューに関する 10 の製品の UI をデザインし、実装しています。',
      empty: '職務経歴は現在更新中です。',
      milestones: [
        {
          period: '2019年11月 – 現在',
          role: 'Product Engineer',
          company: 'GoThru · カナダ（リモート）',
          tag: 'UI/UX & Frontend',
          deliverables: [
            'GoThru の 360° バーチャルツアーと Google ストリートビューのプラットフォームで、10 の製品の UI をデザインし、実装しています。',
            '担当製品：Panorra、TourMkr、GoThru Dashboard、StreetBuilder、GoThru Navigator、Villume、MapThru、GoThru PhotoStudio、GoThru 360 Virtual Tour Maker、GoThru Marketing。',
            'ユーザーリサーチとワイヤーフレームから、ユーザーフロー、高精度 UI、プロトタイプ、Figma での開発者への引き渡しまで、各プロジェクトを一貫して担当しています。',
            'あいまいなビジネス要件を、わかりやすいユーザージャーニーとレスポンシブなレイアウトに落とし込んでいます。',
            '承認されたデザインどおりに仕上がるよう、HTML、CSS、JavaScript でインターフェースを実装しています。',
            'AI コーディングツール（Claude Code、Codex、Cursor、OpenCode、Antigravity）と Google Stitch を使い、プロトタイピングとデザインからコードへの作業を速めています。',
            'クライアント満足度 5/5、プロジェクトの 95〜100% を期限内に納品。異なるタイムゾーンのクライアントとリモートで協業しています。'
          ]
        },
        {
          period: '2025年 卒業',
          role: '情報システム学 学士',
          company: 'Universitas Subang',
          tag: '学歴',
          deliverables: [
            'GPA 3.65 / 4.00。',
            '資格：UI/UX Design（Build With Angga / BWA）。',
            '資格：HTML、CSS、JavaScript、Node.js（Udemy）。'
          ]
        }
      ] as Milestone[]
    },
    beyond: {
      eyebrow: '一緒に働くとき',
      eyebrowRight: '進め方と原則',
      titlePre: '',
      titleEm: '一緒に進める',
      titlePost: 'ときのこと。',
      body: '一緒に何かをつくるときに、期待していただけること。',
      cards: [
        {
          label: '進め方',
          title: '小さく始める',
          body: 'まず小さな部分を決めてリリースし、わかったことをもとに調整していきます。',
          foot: '一歩ずつ'
        },
        {
          label: 'コミュニケーション',
          title: 'わかりやすい報告',
          body: 'スクリーンショットやプレビューリンク付きの短い報告で、会議を増やさずに進み具合を確認できます。',
          foot: '非同期でも安心'
        },
        {
          label: '引き継ぎ',
          title: 'すべてお渡しします',
          body: 'コード、デザイン、メモはチームのリポジトリと Figma に置き、誰でも引き継げるように書いておきます。',
          foot: '属人化させない'
        },
        {
          label: '原則',
          title: '守るようにしていること',
          items: [
            '100 ms 未満は一瞬に感じる。',
            'シンプルなコードは保守が安い。',
            'アクセシビリティは構造の一部。',
            '見た目の良さと使いやすさは両立できる。'
          ],
          foot: 'どのプロジェクトでも'
        }
      ]
    },
    collab: {
      eyebrow: 'お問い合わせ // フルタイム・パートタイムの仕事を募集中',
      titlePre: '',
      titleEm: '一緒に',
      titlePost: 'つくりませんか。',
      body: 'デザインとエンジニアリングの両方ができる人を探しているチームがあれば、ぜひ話を聞かせてください。短いメッセージで大丈夫です。そこから進めましょう。',
      email: 'メールを送る',
      back: 'ホームへ戻る'
    }
  },
  error: {
    title: 'ページが見つかりません',
    body: 'このページは存在しないか、移動しました。',
    generic: 'エラーが発生しました',
    back: 'ホームへ戻る'
  }
};

export default ja;
