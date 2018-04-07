const mockExamsData = {
  exams: [
    {
      _id: 1,
      type: '模拟',
      name: '模拟试题1',
      questionsCount: 50,
      category: '日语能力考试/N1',
      time: '2小时',
      createdAt: '2018/04/07 12:00:09',
      createdBy: '管理员',
    },
    {
      _id: 2,
      type: '模拟',
      name: '模拟试题2',
      questionsCount: 50,
      category: '日语能力考试/N1',
      time: '2小时',
      createdAt: '2018/04/07 12:00:09',
      createdBy: '管理员',
    },
    {
      _id: 3,
      type: '模拟',
      name: '模拟试题3',
      questionsCount: 50,
      category: '日语能力考试/N1',
      time: '2小时',
      createdAt: '2018/04/07 12:00:09',
      createdBy: '管理员',
    },
    {
      _id: 4,
      type: '模拟',
      name: '模拟试题4',
      questionsCount: 50,
      category: '日语能力考试/N1',
      time: '2小时',
      createdAt: '2018/04/07 12:00:09',
      createdBy: '管理员',
    },
    {
      _id: 5,
      type: '模拟',
      name: '模拟试题5',
      questionsCount: 50,
      category: '日语能力考试/N1',
      time: '2小时',
      createdAt: '2018/04/07 12:00:09',
      createdBy: '管理员',
    },
  ],
  examCategory: [
    {
      name: '日语能力考试',
      exams: [
        {
          title: '日语一级',
          description: '',
        },
        {
          title: '日语二级',
          description: '',
        },
        {
          title: '日语三级',
          description: '',
        },
        {
          title: '日语四级',
          description: '',
        },
      ],
    },
    {
      name: '软考',
      exams: [
        {
          title: '程序员',
          description: '',
        },
        {
          title: '软件设计师',
          description: '',
        },
        {
          title: '软件架构师',
          description: '',
        },
      ],
    },
  ],
  questionsCategory: [
    {
      title: '日语一级',
      description: '',
      count: 40,
    },
    {
      title: '日语二级',
      description: '',
      count: 46,
    },
    {
      title: '日语三级',
      description: '',
      count: 52,
    },
    {
      title: '日语四级',
      description: '',
      count: 100,
    },
    {
      title: '程序员',
      description: '',
      count: 230,
    },
    {
      title: '软件设计师',
      description: '',
      count: 60,
    },
    {
      title: '软件架构师',
      description: '',
      count: 76,
    },
  ],
};

export default mockExamsData;
