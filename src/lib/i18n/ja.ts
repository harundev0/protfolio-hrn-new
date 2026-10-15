import type en from './en';
import type { Milestone } from './en';

const ja: typeof en = {
  meta: {
    title: 'Harun Bahrudin — プロダクト / UI/UX / フロントエンドエンジニア',
    description:
      'インドネシアのプロダクト / UI/UX / フロントエンドエンジニア、Harun です。Web アプリの設計と開発をしていて、リモートでどこのチームとも一緒に働けます。',
    aboutTitle: '自己紹介 — Harun Bahrudin'
  },
  nav: {
    home: 'ホーム',
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
    homeAria: 'ホーム'
  },
  ruler: {
    portfolio: 'ポートフォリオ',
    aboutTag: '自己紹介 // Harun',
    position: 'ページ位置',
    home: {
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
    body: 'プロダクトエンジニア、UI/UX エンジニア、フロントエンドエンジニアをしています。Figma での最初のスケッチから、本番で動くコードまでを担当します。',
    ctaPrimary: '仕事内容を見る',
    ctaSecondary: '自己紹介'
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
    eyebrow: '新しいプロジェクト受付中',
    titlePre: '',
    titleEm: '一緒にやりたいこと',
    titlePost: 'はありますか？',
    body: 'つくっているものと、困っていることを少し教えてください。お返事の際に、私が力になれそうかどうかも正直にお伝えします。',
    email: 'メールを送る',
    github: 'GitHub',
    top: 'トップへ戻る'
  },
  footer: {
    stripLeft: 'Harun Bahrudin // ポートフォリオ',
    stripAvailable: 'リモートワーク可',
    stripTimezone: 'インドネシア (UTC+7)',
    bio: 'インドネシアのプロダクト / UI/UX / フロントエンドエンジニア。細部を大切にするチームと、Web アプリをデザインしてつくっています。',
    based: 'インドネシア在住 // リモートワーク可',
    navTitle: 'ナビゲーション',
    navLinks: ['ホーム', '専門分野', '自己紹介', '技術スタック', '連絡先'],
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
    titlePre: '半分デザイナー、',
    titleEm: '半分エンジニア',
    titlePost: '。',
    intro:
      'インドネシアでプロダクト / UI/UX / フロントエンドエンジニアをしている Harun Bahrudin です。仕事の多くはデザインとコードの間にあります。どう動くべきかを考え、デザインし、それを自分でつくります。',
    openToWork: 'お仕事・業務委託を受付中',
    timezone: 'タイムゾーン: インドネシア (UTC+7)',
    statusLeft: 'Harun について',
    statusFocus: '領域: プロダクト · UI/UX · フロントエンド',
    statusRight: 'デザイン・開発: Harun',
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
      body: 'Web サイトをいじって遊んでいたころから、つくる側になるまでの短いお話です。',
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
            { label: 'ステータス', val: '厳選したプロジェクトを受付中' },
            { label: 'タイムゾーン', val: 'インドネシア / UTC+7（リモート）' },
            { label: '目標', val: '気持ちよく使えるソフトウェア' }
          ],
          specimenTitle: 'Fig 04 // 今のワークスペース',
          specimenSubtitle: 'プロダクト · UI/UX · フロントエンド'
        }
      ]
    },
    experience: {
      eyebrow: '経歴',
      eyebrowRight: '職務経歴',
      titlePre: '',
      titleEm: 'これまでの',
      titlePost: '仕事。',
      body: '担当した役割、チーム、取り組んだこと。',
      empty: '職務経歴は現在更新中です。',
      milestones: [] as Milestone[]
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
          body: 'コード、デザイン、メモはすべてお客様のリポジトリと Figma に置くので、私がいなくてもチームで続けられます。',
          foot: 'すべてお客様のもの'
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
      eyebrow: 'お問い合わせ // 協業受付中',
      titlePre: '',
      titleEm: '一緒に',
      titlePost: 'つくりませんか。',
      body: 'デザインとエンジニアリングの両方が必要なプロダクトがあれば、ぜひ話を聞かせてください。短いメッセージで大丈夫です。そこから進めましょう。',
      email: 'メールを送る',
      back: 'ホームへ戻る'
    }
  }
};

export default ja;
