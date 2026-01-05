// Data Definitions
const months = ['2025-06', '2025-07', '2025-08'];

const fieldDefinitions = {
    '发薪总人数': { title: '发薪总人数 (A1)', content: '范围：本月有实发工资记录（实发>0）且属于正式员工、试用员工。' },
    '涉及加班': { title: '涉及加班 (A2)', content: '条件：当月薪资明细中，[加班费] > 0 的人员。' },
    '涉及补偿金': { title: '涉及补偿金 (A3)', content: '条件：当月薪资明细中，[离职补偿金] > 0 的人员。' },
    '发薪总额': { title: '发薪总额 (B1)', content: '包含员工应发工资及公司支付的五险一金总额' },
    '应发工资': { title: '基本薪资 (B2)', content: '包含基本工资、补贴项、考勤扣款/补款等。' },
    '加班费': { title: '加班费 (B3)', content: '当月发放加班费。' },
    '离职补偿': { title: '离职补偿 (B4)', content: '当月发放离职补偿金。' },
    '签约金': { title: '签约金 (B5)', content: '当月发放签约金。' },
    '奖金': { title: '奖金 (B6)', content: '当月发放奖金。' },
    '五险一金司付': { title: '五险一金司付 (B7)', content: '由公司支付的五险一金部分总额' },
    '发薪变化说明': { title: '发薪变化说明 (B9)', content: '逻辑：取自 Payroll 专员在后台针对该部门录入的备注信息，用于解释成本波动原因。' }
};

const datasets = {
    '2025-06': [
      {
        id: '0', name: '完美世界', level: 0, expanded: true,
        desc: "集团总部",
        people: { val: 2674, chg: -10, pct: -0.4 },
        people_ot: { val: 85, chg: 0, pct: 0 },
        people_sev: { val: 23, chg: 0, pct: 0 },
        total: { val: 3921, chg: -19.88, pct: -0.5 },
        salary: { val: 2817.65, chg: -12.64, pct: -0.4 },
        ot_pay: { val: 162.82, chg: 3.29, pct: 2.1 },
        severance: { val: 65.25, chg: -2.1, pct: -3.1 },
        signing_bonus: { val: 0, chg: 0, pct: 0 },
        bonus: { val: 244, chg: 0, pct: 0 },
        social: { val: 580.52, chg: -7.4, pct: -1.3 },
        children: [
          {
            id: '1', name: '游戏业务', level: 1, expanded: true,
            desc: "业务平稳。",
            people: { val: 2510, chg: -7, pct: -0.3 },
            people_ot: { val: 78, chg: 0, pct: 0 },
            people_sev: { val: 23, chg: 0, pct: 0 },
            total: { val: 3687.45, chg: -15.58, pct: -0.4 },
            salary: { val: 2643.73, chg: -11.2, pct: -0.4 },
            ot_pay: { val: 155.36, chg: 3.29, pct: 2.1 },
            severance: { val: 65.25, chg: -2.1, pct: -3.0 },
            signing_bonus: { val: 0, chg: 0, pct: 0 },
            bonus: { val: 244.00, chg: 0, pct: 0 },
            social: { val: 528.34, chg: -5.4, pct: -1.0 },
            children: [
              {
                id: '1-1', name: '游戏工作室群', level: 2, expanded: false,
                desc: "原光子工作室群",
                people: { val: 1260, chg: 0, pct: 0 },
                people_ot: { val: 40, chg: 0, pct: 0 },
                people_sev: { val: 9, chg: 0, pct: 0 },
                total: { val: 1836.20, chg: -9.68, pct: -1.5 },
                salary: { val: 1382.13, chg: -9.68, pct: -2.0 },
                ot_pay: { val: 32.53, chg: 0, pct: 0 },
                severance: { val: 9.43, chg: 0, pct: 0 },
                signing_bonus: { val: 0, chg: 0, pct: 0 },
                bonus: { val: 172.30, chg: 0, pct: 0 },
                social: { val: 209.81, chg: 0, pct: 0 },
                children: []
              },
              {
                id: '1-2', name: '桃花源工作室群', level: 2, expanded: false,
                desc: "原天美工作室群",
                people: { val: 512, chg: 5, pct: 1.0 },
                people_ot: { val: 45, chg: 0, pct: 0 },
                people_sev: { val: 0, chg: 0, pct: 0 },
                total: { val: 712.50, chg: 12.3, pct: 1.8 },
                salary: { val: 550.00, chg: 10.0, pct: 1.9 },
                ot_pay: { val: 80.50, chg: 2.3, pct: 3.0 },
                severance: { val: 0, chg: 0, pct: 0 },
                signing_bonus: { val: 0, chg: 0, pct: 0 },
                bonus: { val: 10.00, chg: 0, pct: 0 },
                social: { val: 72.00, chg: 0, pct: 0 },
              }
            ]
          },
          {
            id: '2', name: '集团发展部', level: 1, expanded: true,
            desc: "原集团职能",
            people: { val: 164, chg: -3, pct: -1.8 },
            people_ot: { val: 7, chg: 0, pct: 0 },
            people_sev: { val: 0, chg: 0, pct: 0 },
            total: { val: 233.55, chg: -4.30, pct: -1.8 },
            salary: { val: 173.92, chg: -1.44, pct: -0.8 },
            ot_pay: { val: 7.46, chg: 0, pct: 0 },
            severance: { val: 0, chg: 0, pct: 0 },
            signing_bonus: { val: 0, chg: 0, pct: 0 },
            bonus: { val: 0, chg: 0, pct: 0 },
            social: { val: 52.18, chg: -2.0, pct: -3.8 },
            children: [
              {
                id: '2-1', name: '人力资源中台', level: 2, expanded: false,
                desc: "",
                people: { val: 30, chg: -1, pct: -3.2 },
                people_ot: { val: 0, chg: 0, pct: 0 },
                people_sev: { val: 0, chg: 0, pct: 0 },
                total: { val: 39.80, chg: -1.33, pct: -3.2 },
                salary: { val: 30.62, chg: -1.0, pct: -3.0 },
                ot_pay: { val: 0, chg: 0, pct: 0 },
                severance: { val: 0, chg: 0, pct: 0 },
                signing_bonus: { val: 0, chg: 0, pct: 0 },
                bonus: { val: 0, chg: 0, pct: 0 },
                social: { val: 9.19, chg: -0.3, pct: -3.0 },
              }
            ]
          }
        ]
      }
    ],
    '2025-07': [
      {
        id: '0', name: '完美世界', level: 0, expanded: true,
        desc: "集团总部",
        people: { val: 2762, chg: 88, pct: 3.3 },
        people_ot: { val: 90, chg: 5, pct: 5.9 },
        people_sev: { val: 5, chg: -18, pct: -78.3 },
        total: { val: 4080.3, chg: 159.3, pct: 4.1 },
        salary: { val: 2921.6, chg: 103.95, pct: 3.7 },
        ot_pay: { val: 176.7, chg: 13.88, pct: 8.5 },
        severance: { val: 15.2, chg: -50.05, pct: -76.7 },
        signing_bonus: { val: 50, chg: 50, pct: 0 },
        bonus: { val: 250, chg: 6, pct: 2.5 },
        social: { val: 602.2, chg: 21.68, pct: 3.7 },
        children: [
          {
            id: '1', name: '游戏业务', level: 1, expanded: true,
            desc: "",
            people: { val: 2600, chg: 90, pct: 3.6 },
            people_ot: { val: 85, chg: 7, pct: 9.0 },
            people_sev: { val: 5, chg: -18, pct: -78.3 },
            total: { val: 3850.20, chg: 162.75, pct: 4.4 },
            salary: { val: 2750.10, chg: 106.37, pct: 4.0 },
            ot_pay: { val: 170.50, chg: 15.14, pct: 9.7 },
            severance: { val: 15.20, chg: -50.05, pct: -76.7 },
            signing_bonus: { val: 50.00, chg: 50.00, pct: 100 },
            bonus: { val: 250.00, chg: 6.00, pct: 2.5 },
            social: { val: 550.40, chg: 22.06, pct: 4.2 },
            children: [
              {
                id: '1-1', name: '游戏工作室群', level: 2, expanded: false, desc: "",
                people: { val: 1280, chg: 20, pct: 1.6 }, people_ot: { val: 15, chg: -25, pct: -62 }, people_sev: { val: 2, chg: -7, pct: -77 }, total: { val: 1860.50, chg: 24.3, pct: 1.3 }, salary: { val: 1400.00, chg: 17.87, pct: 1.3 }, ot_pay: { val: 35.00, chg: 2.47, pct: 7.6 }, severance: { val: 5.00, chg: -4.43, pct: -47 }, signing_bonus: { val: 0, chg: 0, pct: 0 }, bonus: { val: 175.00, chg: 2.7, pct: 1.6 }, social: { val: 211.50, chg: 1.69, pct: 0.8 },
                children: []
              },
              {
                id: '1-2', name: '桃花源工作室群', level: 2, expanded: false, desc: "",
                people: { val: 530, chg: 18, pct: 3.5 }, people_ot: { val: 50, chg: 5, pct: 11 }, people_sev: { val: 0, chg: 0, pct: 0 }, total: { val: 740.20, chg: 27.7, pct: 3.9 }, salary: { val: 570.00, chg: 20.0, pct: 3.6 }, ot_pay: { val: 88.00, chg: 7.5, pct: 9.3 }, severance: { val: 0, chg: 0, pct: 0 }, signing_bonus: { val: 50.00, chg: 50, pct: 100 }, bonus: { val: 12.00, chg: 2, pct: 20 }, social: { val: 75.00, chg: 3, pct: 4.2 }
              }
            ]
          },
          {
            id: '2', name: '集团发展部', level: 1, expanded: true,
            desc: "",
            people: { val: 162, chg: -2, pct: -1.2 },
            people_ot: { val: 5, chg: -2, pct: -28 },
            people_sev: { val: 0, chg: 0, pct: 0 },
            total: { val: 230.10, chg: -3.45, pct: -1.5 },
            salary: { val: 171.50, chg: -2.42, pct: -1.4 },
            ot_pay: { val: 6.20, chg: -1.26, pct: -16.9 },
            severance: { val: 0, chg: 0, pct: 0 },
            signing_bonus: { val: 0, chg: 0, pct: 0 },
            bonus: { val: 0, chg: 0, pct: 0 },
            social: { val: 51.80, chg: -0.38, pct: -0.7 },
            children: [
              {
                id: '2-1', name: '人力资源中台', level: 2, expanded: false, desc: "",
                people: { val: 29, chg: -1, pct: -3.3 }, people_ot: { val: 0, chg: 0, pct: 0 }, people_sev: { val: 0, chg: 0, pct: 0 }, total: { val: 38.50, chg: -1.3, pct: -3.3 }, salary: { val: 29.80, chg: -0.82, pct: -2.7 }, ot_pay: { val: 0, chg: 0, pct: 0 }, severance: { val: 0, chg: 0, pct: 0 }, signing_bonus: { val: 0, chg: 0, pct: 0 }, bonus: { val: 0, chg: 0, pct: 0 }, social: { val: 8.70, chg: -0.49, pct: -5.3 }
              }
            ]
          }
        ]
      }
    ],
    '2025-08': [
      {
        id: '0', name: '完美世界', level: 0, expanded: true,
        desc: "集团总部",
        people: { val: 2935, chg: 173, pct: 6.3 },
        people_ot: { val: 70, chg: -20, pct: -22.2 },
        people_sev: { val: 5, chg: 0, pct: 0 },
        total: { val: 4786.3, chg: 706, pct: 17.3 },
        salary: { val: 3450, chg: 528.4, pct: 18.1 },
        ot_pay: { val: 140.5, chg: -36.2, pct: -20.5 },
        severance: { val: 18, chg: 2.8, pct: 18.4 },
        signing_bonus: { val: 12, chg: 0, pct: 0 },
        bonus: { val: 400, chg: 150, pct: 60 },
        social: { val: 680.3, chg: 78.1, pct: 13 },
        children: [
          {
            id: '1', name: '游戏业务', level: 1, expanded: true,
            desc: "普调生效，成本上升。",
            people: { val: 2755, chg: 155, pct: 6.0 },
            people_ot: { val: 65, chg: -20, pct: -23.5 },
            people_sev: { val: 5, chg: 0, pct: 0 },
            total: { val: 4520.50, chg: 670.3, pct: 17.4 },
            salary: { val: 3250.00, chg: 499.9, pct: 18.2 },
            ot_pay: { val: 135.00, chg: -35.5, pct: -20.8 },
            severance: { val: 18.00, chg: 2.8, pct: 18.4 },
            signing_bonus: { val: 12.00, chg: 0, pct: 0 },
            bonus: { val: 400.00, chg: 150.0, pct: 60.0 },
            social: { val: 620.00, chg: 69.6, pct: 12.6 },
            children: [
              {
                id: '1-1', name: '游戏工作室群', level: 2, expanded: true,
                desc: "下属工作室架构调整完成。",
                people: { val: 1680, chg: 400, pct: 31.3 },
                people_ot: { val: 30, chg: 15, pct: 100 },
                people_sev: { val: 3, chg: 1, pct: 50 },
                total: { val: 2580.00, chg: 719.5, pct: 38.7 },
                salary: { val: 1950.00, chg: 550.0, pct: 39.3 },
                ot_pay: { val: 45.00, chg: 10.0, pct: 28.6 },
                severance: { val: 12.00, chg: 7.0, pct: 140 },
                signing_bonus: { val: 12.00, chg: 0, pct: 0 },
                bonus: { val: 280.00, chg: 105.0, pct: 60 },
                social: { val: 380.00, chg: 168.5, pct: 79.7 },
                children: [
                  {
                    id: '1-1-1', name: '青云工作室', level: 3, expanded: false,
                    desc: "新项目立项",
                    people: { val: 600, chg: 20, pct: 3.4 },
                    people_ot: { val: 20, chg: 5, pct: 33 },
                    people_sev: { val: 0, chg: 0, pct: 0 },
                    total: { val: 950.00, chg: 45.3, pct: 5.0 },
                    salary: { val: 720.00, chg: 35.0, pct: 5.1 },
                    ot_pay: { val: 30.00, chg: 5.0, pct: 20 },
                    severance: { val: 0, chg: 0, pct: 0 },
                    signing_bonus: { val: 12.00, chg: 12, pct: 100 },
                    bonus: { val: 100.00, chg: 10, pct: 11 },
                    social: { val: 130.00, chg: 8, pct: 6.6 }
                  },
                  {
                    id: '1-1-2', name: '黑羽工作室', level: 3, expanded: false,
                    desc: "海外版本冲刺",
                    people: { val: 480, chg: 5, pct: 1.0 },
                    people_ot: { val: 8, chg: 2, pct: 33 },
                    people_sev: { val: 0, chg: 0, pct: 0 },
                    total: { val: 780.00, chg: 30.5, pct: 4.1 },
                    salary: { val: 560.00, chg: 25.0, pct: 4.7 },
                    ot_pay: { val: 12.00, chg: 3.0, pct: 33 },
                    severance: { val: 0, chg: 0, pct: 0 },
                    signing_bonus: { val: 0, chg: 0, pct: 0 },
                    bonus: { val: 80.00, chg: 15, pct: 23 },
                    social: { val: 105.00, chg: 5, pct: 5 }
                  },
                  {
                    id: '1-1-3', name: '白海豚工作室', level: 3, expanded: false,
                    desc: "人员优化完成",
                    people: { val: 600, chg: -30, pct: -4.8 },
                    people_ot: { val: 2, chg: -5, pct: -71 },
                    people_sev: { val: 3, chg: 3, pct: 100 },
                    total: { val: 850.00, chg: -20.5, pct: -2.4 },
                    salary: { val: 670.00, chg: -15.0, pct: -2.2 },
                    ot_pay: { val: 3.00, chg: -1.5, pct: -33 },
                    severance: { val: 12.00, chg: 12, pct: 100 },
                    signing_bonus: { val: 0, chg: 0, pct: 0 },
                    bonus: { val: 100.00, chg: 0, pct: 0 },
                    social: { val: 145.00, chg: -5, pct: -3.3 },
                  }
                ]
              },
              {
                id: '1-2', name: '桃花源工作室群', level: 2, expanded: false,
                desc: "",
                people: { val: 540, chg: 10, pct: 1.9 },
                people_ot: { val: 30, chg: -20, pct: -40 },
                people_sev: { val: 0, chg: 0, pct: 0 },
                total: { val: 820.50, chg: 80.3, pct: 10.8 },
                salary: { val: 630.00, chg: 60.0, pct: 10.5 },
                ot_pay: { val: 60.00, chg: 0, pct: 0 },
                severance: { val: 0, chg: 0, pct: 0 },
                signing_bonus: { val: 0, chg: 0, pct: 0 },
                bonus: { val: 18.00, chg: 6, pct: 50 },
                social: { val: 85.00, chg: 10, pct: 13.3 }
              }
            ]
          },
          {
            id: '2', name: '集团发展部', level: 1, expanded: true,
            desc: "架构升级，新设AI Lab",
            people: { val: 180, chg: 18, pct: 11.1 },
            people_ot: { val: 5, chg: 0, pct: 0 },
            people_sev: { val: 0, chg: 0, pct: 0 },
            total: { val: 265.80, chg: 35.7, pct: 15.5 },
            salary: { val: 200.00, chg: 28.5, pct: 16.6 },
            ot_pay: { val: 5.50, chg: -0.7, pct: -11.3 },
            severance: { val: 0, chg: 0, pct: 0 },
            signing_bonus: { val: 0, chg: 0, pct: 0 },
            bonus: { val: 0, chg: 0, pct: 0 },
            social: { val: 60.30, chg: 8.5, pct: 16.4 },
            children: [
              {
                id: '2-1', name: '人力资源中台', level: 2, expanded: false, desc: "",
                people: { val: 32, chg: 1, pct: 3.2 }, people_ot: { val: 0, chg: 0, pct: 0 }, people_sev: { val: 0, chg: 0, pct: 0 }, total: { val: 45.00, chg: 3.0, pct: 7.1 }, salary: { val: 35.00, chg: 2.0, pct: 6.1 }, ot_pay: { val: 0, chg: 0, pct: 0 }, severance: { val: 0, chg: 0, pct: 0 }, signing_bonus: { val: 0, chg: 0, pct: 0 }, bonus: { val: 0, chg: 0, pct: 0 }, social: { val: 10.00, chg: 1.3, pct: 14.9 }
              },
              {
                id: '2-2', name: 'AI Lab', level: 2, expanded: false,
                desc: "[NEW] 战略重点",
                people: { val: 15, chg: 15, pct: 100 },
                people_ot: { val: 2, chg: 2, pct: 100 },
                people_sev: { val: 0, chg: 0, pct: 0 },
                total: { val: 50.00, chg: 50, pct: 100 },
                salary: { val: 40.00, chg: 40, pct: 100 },
                ot_pay: { val: 2.00, chg: 2, pct: 100 },
                severance: { val: 0, chg: 0, pct: 0 },
                signing_bonus: { val: 0, chg: 0, pct: 0 },
                bonus: { val: 0, chg: 0, pct: 0 },
                social: { val: 8.00, chg: 8, pct: 100 }
              }
            ]
          }
        ]
      }
    ]
  };

// State
const state = {
    currentMonth: '2025-08',
    viewMode: 'summary', // 'summary' or 'detail'
    showComparison: true,
    expandedKeys: new Set(['0', '1', '2'])
};

// Utils
const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
};

const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(num);
};

const getTrendClass = (chg) => {
    if (chg > 0) return 'text-red';
    if (chg < 0) return 'text-green';
    return 'text-gray';
};

// SVG Icons
const Icons = {
    CaretLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>`,
    CaretRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>`,
    Money: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,128a48,48,0,1,0-48-48A48.05,48.05,0,0,0,128,128Zm0-80a32,32,0,1,1-32,32A32,32,0,0,1,128,48Zm96,112H200V88a56.06,56.06,0,0,0-56-56H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V176A16,16,0,0,0,224,160ZM48,48h96a40,40,0,0,1,40,40v72H168a8,8,0,0,0,0,16h16v32H48Zm176,160H200V176h24Z"></path></svg>`,
    CaretDown: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>`,
    CaretRightSmall: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>`,
    Info: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg>`
};

// Render Functions
function renderIcons() {
    document.querySelectorAll('[data-icon]').forEach(el => {
        const iconName = el.dataset.icon;
        if (Icons[iconName]) {
            el.innerHTML = Icons[iconName];
        }
    });
}

function renderHeader() {
    const [y, m] = state.currentMonth.split('-');
    document.getElementById('current-month-text').textContent = `${y}年 ${m}月`;
}

function renderToolbar() {
    // View Mode Buttons
    document.getElementById('btn-summary').classList.toggle('active', state.viewMode === 'summary');
    document.getElementById('btn-detail').classList.toggle('active', state.viewMode === 'detail');
    
    // Expand/Collapse Buttons
    // Ideally we check if all expanded, but simple logic for now
}

function getTreeRows(nodes, rows = []) {
    nodes.forEach(node => {
        rows.push(node);
        if (state.expandedKeys.has(node.id) && node.children && node.children.length > 0) {
            getTreeRows(node.children, rows);
        }
    });
    return rows;
}

function renderTrendValue(data, isCurrency, isClickable) {
    const valStr = data.val === 0 ? '-' : (isCurrency ? formatCurrency(data.val) : formatNumber(data.val));
    const trendClass = getTrendClass(data.chg);
    const trendSign = data.chg > 0 ? '+' : '';
    const pctSign = data.chg > 0 ? '+' : '';
    
    let html = `<div class="trend-cell">`;
    html += `<div class="trend-val ${data.val === 0 ? 'zero' : ''} ${isClickable ? 'clickable' : ''}">${valStr}</div>`;
    
    if (state.showComparison && data.chg !== 0) {
        html += `<div class="trend-comp ${trendClass}">`;
        html += `<span>${trendSign}${data.chg.toFixed(2)}</span>`;
        html += `<span style="opacity: 0.8; transform: scale(0.9);">(${pctSign}${data.pct.toFixed(1)}%)</span>`;
        html += `</div>`;
    } else if (state.showComparison) {
        html += `<div class="trend-comp text-gray">-</div>`;
    }
    
    html += `</div>`;
    return html;
}

function renderTable() {
    const tableHead = document.getElementById('table-head');
    const tableBody = document.getElementById('table-body');
    const currentData = datasets[state.currentMonth] || [];
    const rows = getTreeRows(currentData);

    // Render Header
    let theadHTML = '<tr>';
    const commonNameTh = `<th class="fixed-left col-name">部门名称</th>`;
    
    if (state.viewMode === 'summary') {
        theadHTML += commonNameTh;
        theadHTML += `<th title="${fieldDefinitions['发薪总人数'].content}">发薪总人数 <span class="icon-info" data-tooltip>${Icons.Info}</span></th>`;
        theadHTML += `<th title="${fieldDefinitions['发薪总额'].content}">工薪总额 (万元) <span class="icon-info" data-tooltip>${Icons.Info}</span></th>`;
        theadHTML += `<th class="col-desc">发薪变化说明</th>`;
    } else {
        theadHTML += commonNameTh;
        // People Group
        theadHTML += `<th colspan="3" class="group-header">人员概况</th>`;
        // Cost Group
        theadHTML += `<th colspan="7" class="group-header">薪酬成本 (万元)</th>`;
        theadHTML += `<th class="col-desc" rowspan="2">发薪变化说明</th>`;
        theadHTML += `</tr><tr>`; // Second row of header
        // We need to handle the rowspan for the first column "部门名称" which is sticky
        // Standard sticky implementation with rowspans can be tricky.
        // Let's keep it simple: Just put empty th for sticky col in second row if needed, or use single row header for detail view if acceptable.
        // But the design has grouped headers.
        // To keep sticky working, the first th needs rowspan=2.
        
        // Let's reconstruct properly.
        theadHTML = '<tr>';
        theadHTML += `<th rowspan="2" class="fixed-left col-name" style="z-index:20">部门名称</th>`;
        theadHTML += `<th colspan="3" class="group-header">人员概况</th>`;
        theadHTML += `<th colspan="7" class="group-header">薪酬成本 (万元)</th>`;
        theadHTML += `<th rowspan="2" class="col-desc">发薪变化说明</th>`;
        theadHTML += `</tr><tr>`;
        
        // Sub headers
        theadHTML += `<th>发薪总人数</th>`;
        theadHTML += `<th>涉及加班</th>`;
        theadHTML += `<th>涉及补偿金</th>`;
        
        theadHTML += `<th>工薪总额 (万元)</th>`;
        theadHTML += `<th>基本薪资</th>`;
        theadHTML += `<th>加班费</th>`;
        theadHTML += `<th>补偿金</th>`;
        theadHTML += `<th>签约金</th>`;
        theadHTML += `<th>奖金</th>`;
        theadHTML += `<th>司付五险一金</th>`;
    }
    theadHTML += '</tr>';
    tableHead.innerHTML = theadHTML;

    // Render Body
    let tbodyHTML = '';
    rows.forEach(row => {
        const isSummary = row.children && row.children.length > 0;
        const rowClass = isSummary ? 'summary-row' : '';
        const paddingLeft = row.level * 24 + 16;
        
        // Expand/Collapse Icon
        let iconHtml = '';
        if (row.children && row.children.length > 0) {
            const isExpanded = state.expandedKeys.has(row.id);
            iconHtml = `<span class="tree-icon" onclick="toggleExpand('${row.id}')">${isExpanded ? Icons.CaretDown : Icons.CaretRightSmall}</span>`;
        } else {
            iconHtml = `<span class="indent"></span>`;
        }

        tbodyHTML += `<tr class="${rowClass}">`;
        tbodyHTML += `<td class="fixed-left col-name" style="padding-left: ${paddingLeft}px">
            <div style="display: flex; align-items: center;">
                ${iconHtml}
                <span class="col-name-text font-medium text-[var(--color-text-2)]">${row.name}</span>
            </div>
        </td>`;

        if (state.viewMode === 'summary') {
            tbodyHTML += `<td>${renderTrendValue(row.people, false, false)}</td>`;
            tbodyHTML += `<td>${renderTrendValue(row.total, true, false)}</td>`; // Clickable disabled
            
            // Description Logic: If summary row, show '-', else show desc
            const descText = isSummary ? '-' : (row.desc || '-');
            tbodyHTML += `<td class="col-desc"><div class="truncate" title="${descText}">${descText}</div></td>`;
        } else {
            // Detail Mode Columns
            tbodyHTML += `<td>${renderTrendValue(row.people, false, false)}</td>`;
            tbodyHTML += `<td>${renderTrendValue(row.people_ot, false, false)}</td>`;
            tbodyHTML += `<td>${renderTrendValue(row.people_sev, false, false)}</td>`;
            
            tbodyHTML += `<td>${renderTrendValue(row.total, true, false)}</td>`;
            tbodyHTML += `<td>${renderTrendValue(row.salary, true, false)}</td>`;
            tbodyHTML += `<td>${renderTrendValue(row.ot_pay, true, false)}</td>`;
            tbodyHTML += `<td>${renderTrendValue(row.severance, true, false)}</td>`;
            tbodyHTML += `<td>${renderTrendValue(row.signing_bonus, true, false)}</td>`;
            tbodyHTML += `<td>${renderTrendValue(row.bonus, true, false)}</td>`;
            tbodyHTML += `<td>${renderTrendValue(row.social, true, false)}</td>`;
            
            const descText = isSummary ? '-' : (row.desc || '-');
            tbodyHTML += `<td class="col-desc"><div class="truncate" title="${descText}">${descText}</div></td>`;
        }
        tbodyHTML += `</tr>`;
    });
    tableBody.innerHTML = tbodyHTML;
}

// Actions
window.toggleExpand = (id) => {
    if (state.expandedKeys.has(id)) {
        state.expandedKeys.delete(id);
    } else {
        state.expandedKeys.add(id);
    }
    renderTable();
};

window.toggleMonth = (delta) => {
    const idx = months.indexOf(state.currentMonth);
    const newIdx = idx + delta;
    if (newIdx >= 0 && newIdx < months.length) {
        state.currentMonth = months[newIdx];
        renderHeader();
        renderTable();
    }
};

window.setViewMode = (mode) => {
    state.viewMode = mode;
    renderToolbar();
    renderTable();
};

window.toggleComparison = () => {
    state.showComparison = !state.showComparison;
    renderTable();
};

window.expandAll = () => {
    const allIds = new Set();
    const traverse = (nodes) => {
        nodes.forEach(node => {
            if (node.children && node.children.length > 0) {
                allIds.add(node.id);
                traverse(node.children);
            }
        });
    };
    traverse(datasets[state.currentMonth]);
    state.expandedKeys = allIds;
    renderTable();
};

window.collapseAll = () => {
    state.expandedKeys = new Set(['0']);
    renderTable();
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderIcons();
    renderHeader();
    renderToolbar();
    renderTable();
});
