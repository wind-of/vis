import { Folder } from "../types/folder";

export function generateRandomFolder(maxDeep: number = 4): Folder { 
	return {
		id: Math.floor(Math.random() * 100000),
		name: 'Folder #' + Math.floor(Math.random() * 100000),
		children: Math.random() > 0.5 && maxDeep ? Array.from({ length: Math.floor(Math.random() * 10) }, () => generateRandomFolder(maxDeep - 1)) : undefined
	}
}

export const mockFolders = [
	{
			"id": 20231,
			"name": "Folder #64184"
	},
	{
			"id": 8912,
			"name": "Folder #47007"
	},
	{
			"id": 89634,
			"name": "Folder #56171"
	},
	{
			"id": 46188,
			"name": "Folder #15712",
			"children": [
					{
							"id": 81088,
							"name": "Folder #5094"
					},
					{
							"id": 86512,
							"name": "Folder #25849",
							"children": [
									{
											"id": 60470,
											"name": "Folder #83673"
									},
									{
											"id": 95957,
											"name": "Folder #52044"
									},
									{
											"id": 10287,
											"name": "Folder #50704",
											"children": [
													{
															"id": 77935,
															"name": "Folder #31694"
													},
													{
															"id": 58923,
															"name": "Folder #35172",
															"children": [
																	{
																			"id": 38504,
																			"name": "Folder #55992"
																	},
																	{
																			"id": 4015,
																			"name": "Folder #35441"
																	},
																	{
																			"id": 1364,
																			"name": "Folder #8716"
																	},
																	{
																			"id": 49788,
																			"name": "Folder #83930"
																	},
																	{
																			"id": 62062,
																			"name": "Folder #94313"
																	},
																	{
																			"id": 17149,
																			"name": "Folder #9244"
																	},
																	{
																			"id": 86443,
																			"name": "Folder #46106"
																	},
																	{
																			"id": 36266,
																			"name": "Folder #88022"
																	}
															]
													},
													{
															"id": 4478,
															"name": "Folder #3515",
															"children": [
																	{
																			"id": 43688,
																			"name": "Folder #7610"
																	},
																	{
																			"id": 72492,
																			"name": "Folder #11303"
																	},
																	{
																			"id": 52079,
																			"name": "Folder #3170"
																	},
																	{
																			"id": 850,
																			"name": "Folder #95134"
																	},
																	{
																			"id": 88762,
																			"name": "Folder #26703"
																	},
																	{
																			"id": 99454,
																			"name": "Folder #45727"
																	},
																	{
																			"id": 79324,
																			"name": "Folder #64299"
																	}
															]
													},
													{
															"id": 78946,
															"name": "Folder #43928",
															"children": [
																	{
																			"id": 85099,
																			"name": "Folder #2827"
																	},
																	{
																			"id": 6525,
																			"name": "Folder #61053"
																	},
																	{
																			"id": 27624,
																			"name": "Folder #65515"
																	},
																	{
																			"id": 56887,
																			"name": "Folder #63840"
																	}
															]
													},
													{
															"id": 86906,
															"name": "Folder #44674",
															"children": [
																	{
																			"id": 66445,
																			"name": "Folder #44740"
																	},
																	{
																			"id": 84022,
																			"name": "Folder #26313"
																	},
																	{
																			"id": 62329,
																			"name": "Folder #71073"
																	},
																	{
																			"id": 69128,
																			"name": "Folder #80227"
																	},
																	{
																			"id": 24226,
																			"name": "Folder #84906"
																	}
															]
													},
													{
															"id": 96933,
															"name": "Folder #23679"
													}
											]
									},
									{
											"id": 79357,
											"name": "Folder #21672"
									},
									{
											"id": 38745,
											"name": "Folder #87454",
											"children": [
													{
															"id": 26908,
															"name": "Folder #22587",
															"children": [
																	{
																			"id": 7927,
																			"name": "Folder #77702"
																	},
																	{
																			"id": 32524,
																			"name": "Folder #41233"
																	},
																	{
																			"id": 2502,
																			"name": "Folder #15226"
																	},
																	{
																			"id": 63264,
																			"name": "Folder #21603"
																	},
																	{
																			"id": 52425,
																			"name": "Folder #89878"
																	}
															]
													},
													{
															"id": 75182,
															"name": "Folder #35638",
															"children": [
																	{
																			"id": 1823,
																			"name": "Folder #77278"
																	},
																	{
																			"id": 65115,
																			"name": "Folder #21570"
																	},
																	{
																			"id": 15639,
																			"name": "Folder #28072"
																	},
																	{
																			"id": 15741,
																			"name": "Folder #5972"
																	},
																	{
																			"id": 52315,
																			"name": "Folder #22868"
																	},
																	{
																			"id": 96778,
																			"name": "Folder #50977"
																	},
																	{
																			"id": 74578,
																			"name": "Folder #33570"
																	},
																	{
																			"id": 99437,
																			"name": "Folder #60592"
																	}
															]
													},
													{
															"id": 50507,
															"name": "Folder #80693",
															"children": []
													},
													{
															"id": 98373,
															"name": "Folder #2237"
													},
													{
															"id": 34608,
															"name": "Folder #25118"
													},
													{
															"id": 65904,
															"name": "Folder #86336"
													}
											]
									}
							]
					},
					{
							"id": 72629,
							"name": "Folder #54319"
					},
					{
							"id": 40566,
							"name": "Folder #28363",
							"children": [
									{
											"id": 60960,
											"name": "Folder #55467",
											"children": [
													{
															"id": 27809,
															"name": "Folder #44000"
													},
													{
															"id": 42665,
															"name": "Folder #17305"
													},
													{
															"id": 61032,
															"name": "Folder #62096",
															"children": [
																	{
																			"id": 41310,
																			"name": "Folder #6880"
																	}
															]
													},
													{
															"id": 25764,
															"name": "Folder #36383",
															"children": []
													},
													{
															"id": 84742,
															"name": "Folder #49415"
													}
											]
									},
									{
											"id": 41307,
											"name": "Folder #20517"
									}
							]
					},
					{
							"id": 29324,
							"name": "Folder #54156",
							"children": [
									{
											"id": 66677,
											"name": "Folder #51511"
									},
									{
											"id": 71454,
											"name": "Folder #51964"
									},
									{
											"id": 31088,
											"name": "Folder #72783"
									},
									{
											"id": 17714,
											"name": "Folder #66361"
									}
							]
					},
					{
							"id": 16863,
							"name": "Folder #19812"
					},
					{
							"id": 43270,
							"name": "Folder #6897",
							"children": [
									{
											"id": 21866,
											"name": "Folder #90428"
									}
							]
					},
					{
							"id": 86318,
							"name": "Folder #37686"
					}
			]
	},
	{
			"id": 20498,
			"name": "Folder #31768",
			"children": [
					{
							"id": 72781,
							"name": "Folder #54957"
					},
					{
							"id": 61039,
							"name": "Folder #41637",
							"children": [
									{
											"id": 64377,
											"name": "Folder #33006"
									},
									{
											"id": 8362,
											"name": "Folder #22009"
									},
									{
											"id": 11514,
											"name": "Folder #51249"
									}
							]
					}
			]
	},
	{
			"id": 98502,
			"name": "Folder #24539"
	},
	{
			"id": 74017,
			"name": "Folder #63665"
	},
	{
			"id": 31953,
			"name": "Folder #42742",
			"children": [
					{
							"id": 20992,
							"name": "Folder #87177"
					},
					{
							"id": 51729,
							"name": "Folder #81674",
							"children": [
									{
											"id": 53637,
											"name": "Folder #89864",
											"children": [
													{
															"id": 7385,
															"name": "Folder #41609",
															"children": [
																	{
																			"id": 39313,
																			"name": "Folder #43049"
																	},
																	{
																			"id": 61578,
																			"name": "Folder #89694"
																	},
																	{
																			"id": 74106,
																			"name": "Folder #40909"
																	},
																	{
																			"id": 25586,
																			"name": "Folder #10681"
																	}
															]
													},
													{
															"id": 32242,
															"name": "Folder #72231",
															"children": []
													},
													{
															"id": 31026,
															"name": "Folder #4226"
													},
													{
															"id": 66495,
															"name": "Folder #67934"
													},
													{
															"id": 93068,
															"name": "Folder #62071"
													},
													{
															"id": 61665,
															"name": "Folder #48528"
													},
													{
															"id": 8560,
															"name": "Folder #64420",
															"children": [
																	{
																			"id": 78905,
																			"name": "Folder #32394"
																	},
																	{
																			"id": 55983,
																			"name": "Folder #49272"
																	}
															]
													}
											]
									},
									{
											"id": 98266,
											"name": "Folder #55098",
											"children": [
													{
															"id": 87346,
															"name": "Folder #6665"
													}
											]
									},
									{
											"id": 55833,
											"name": "Folder #10010"
									},
									{
											"id": 11511,
											"name": "Folder #64152"
									}
							]
					},
					{
							"id": 28682,
							"name": "Folder #57858"
					},
					{
							"id": 33023,
							"name": "Folder #19920"
					},
					{
							"id": 22801,
							"name": "Folder #94601",
							"children": [
									{
											"id": 20481,
											"name": "Folder #17822"
									},
									{
											"id": 11818,
											"name": "Folder #78792"
									},
									{
											"id": 60222,
											"name": "Folder #92035",
											"children": [
													{
															"id": 20657,
															"name": "Folder #31702"
													}
											]
									}
							]
					},
					{
							"id": 4342,
							"name": "Folder #84593",
							"children": [
									{
											"id": 93309,
											"name": "Folder #61074",
											"children": [
													{
															"id": 37178,
															"name": "Folder #39062",
															"children": [
																	{
																			"id": 73164,
																			"name": "Folder #17430"
																	},
																	{
																			"id": 33692,
																			"name": "Folder #95827"
																	},
																	{
																			"id": 65736,
																			"name": "Folder #43547"
																	},
																	{
																			"id": 42212,
																			"name": "Folder #16738"
																	},
																	{
																			"id": 87615,
																			"name": "Folder #81493"
																	},
																	{
																			"id": 70233,
																			"name": "Folder #71411"
																	},
																	{
																			"id": 18968,
																			"name": "Folder #15832"
																	}
															]
													},
													{
															"id": 92232,
															"name": "Folder #74339",
															"children": [
																	{
																			"id": 24687,
																			"name": "Folder #20642"
																	},
																	{
																			"id": 80949,
																			"name": "Folder #12071"
																	},
																	{
																			"id": 16809,
																			"name": "Folder #60055"
																	},
																	{
																			"id": 79417,
																			"name": "Folder #97620"
																	},
																	{
																			"id": 71549,
																			"name": "Folder #42164"
																	},
																	{
																			"id": 48149,
																			"name": "Folder #70074"
																	},
																	{
																			"id": 37856,
																			"name": "Folder #61295"
																	},
																	{
																			"id": 60032,
																			"name": "Folder #57697"
																	}
															]
													},
													{
															"id": 56395,
															"name": "Folder #19555",
															"children": [
																	{
																			"id": 6709,
																			"name": "Folder #71558"
																	},
																	{
																			"id": 80469,
																			"name": "Folder #54609"
																	},
																	{
																			"id": 5997,
																			"name": "Folder #31423"
																	}
															]
													},
													{
															"id": 76163,
															"name": "Folder #45199",
															"children": [
																	{
																			"id": 65715,
																			"name": "Folder #42015"
																	}
															]
													},
													{
															"id": 60736,
															"name": "Folder #46119"
													},
													{
															"id": 63881,
															"name": "Folder #1452"
													},
													{
															"id": 78345,
															"name": "Folder #90480"
													},
													{
															"id": 84322,
															"name": "Folder #61974",
															"children": [
																	{
																			"id": 93652,
																			"name": "Folder #71319"
																	},
																	{
																			"id": 57455,
																			"name": "Folder #25324"
																	},
																	{
																			"id": 74625,
																			"name": "Folder #21369"
																	},
																	{
																			"id": 6205,
																			"name": "Folder #12086"
																	},
																	{
																			"id": 76977,
																			"name": "Folder #83747"
																	}
															]
													},
													{
															"id": 33711,
															"name": "Folder #79171"
													}
											]
									},
									{
											"id": 9377,
											"name": "Folder #82109"
									}
							]
					},
					{
							"id": 11322,
							"name": "Folder #40342"
					},
					{
							"id": 21645,
							"name": "Folder #45204",
							"children": [
									{
											"id": 1026,
											"name": "Folder #81996",
											"children": [
													{
															"id": 12231,
															"name": "Folder #91110",
															"children": [
																	{
																			"id": 10063,
																			"name": "Folder #56079"
																	},
																	{
																			"id": 95630,
																			"name": "Folder #73201"
																	},
																	{
																			"id": 12538,
																			"name": "Folder #93535"
																	}
															]
													}
											]
									},
									{
											"id": 79058,
											"name": "Folder #47187",
											"children": [
													{
															"id": 6860,
															"name": "Folder #29925"
													},
													{
															"id": 2147,
															"name": "Folder #4975",
															"children": [
																	{
																			"id": 88220,
																			"name": "Folder #78456"
																	}
															]
													},
													{
															"id": 48909,
															"name": "Folder #1593",
															"children": [
																	{
																			"id": 11151,
																			"name": "Folder #82353"
																	},
																	{
																			"id": 71644,
																			"name": "Folder #69272"
																	},
																	{
																			"id": 26117,
																			"name": "Folder #47953"
																	},
																	{
																			"id": 4905,
																			"name": "Folder #71342"
																	}
															]
													},
													{
															"id": 12379,
															"name": "Folder #88718",
															"children": []
													},
													{
															"id": 83630,
															"name": "Folder #48695",
															"children": []
													},
													{
															"id": 31085,
															"name": "Folder #64112",
															"children": [
																	{
																			"id": 8366,
																			"name": "Folder #11716"
																	},
																	{
																			"id": 2114,
																			"name": "Folder #13850"
																	},
																	{
																			"id": 65956,
																			"name": "Folder #5233"
																	},
																	{
																			"id": 57378,
																			"name": "Folder #60929"
																	},
																	{
																			"id": 10596,
																			"name": "Folder #25470"
																	},
																	{
																			"id": 38132,
																			"name": "Folder #47584"
																	},
																	{
																			"id": 20224,
																			"name": "Folder #55969"
																	},
																	{
																			"id": 12317,
																			"name": "Folder #19410"
																	}
															]
													},
													{
															"id": 42871,
															"name": "Folder #87633",
															"children": [
																	{
																			"id": 73828,
																			"name": "Folder #22320"
																	},
																	{
																			"id": 70519,
																			"name": "Folder #11564"
																	},
																	{
																			"id": 84063,
																			"name": "Folder #35067"
																	},
																	{
																			"id": 41805,
																			"name": "Folder #30735"
																	},
																	{
																			"id": 92781,
																			"name": "Folder #60326"
																	},
																	{
																			"id": 33607,
																			"name": "Folder #87927"
																	},
																	{
																			"id": 2814,
																			"name": "Folder #62209"
																	}
															]
													}
											]
									},
									{
											"id": 79805,
											"name": "Folder #22633"
									},
									{
											"id": 59476,
											"name": "Folder #81121"
									},
									{
											"id": 5629,
											"name": "Folder #33401",
											"children": [
													{
															"id": 3220,
															"name": "Folder #35190"
													},
													{
															"id": 86114,
															"name": "Folder #35031"
													},
													{
															"id": 92869,
															"name": "Folder #47020",
															"children": [
																	{
																			"id": 49122,
																			"name": "Folder #46656"
																	},
																	{
																			"id": 99117,
																			"name": "Folder #34244"
																	},
																	{
																			"id": 77617,
																			"name": "Folder #79166"
																	},
																	{
																			"id": 1506,
																			"name": "Folder #54250"
																	},
																	{
																			"id": 32427,
																			"name": "Folder #13479"
																	}
															]
													},
													{
															"id": 69170,
															"name": "Folder #96019",
															"children": [
																	{
																			"id": 91872,
																			"name": "Folder #43092"
																	},
																	{
																			"id": 75233,
																			"name": "Folder #52169"
																	},
																	{
																			"id": 40233,
																			"name": "Folder #25530"
																	},
																	{
																			"id": 62751,
																			"name": "Folder #56622"
																	},
																	{
																			"id": 29814,
																			"name": "Folder #76540"
																	}
															]
													},
													{
															"id": 89843,
															"name": "Folder #4954",
															"children": [
																	{
																			"id": 83581,
																			"name": "Folder #84334"
																	},
																	{
																			"id": 14816,
																			"name": "Folder #30677"
																	},
																	{
																			"id": 24916,
																			"name": "Folder #31733"
																	},
																	{
																			"id": 41382,
																			"name": "Folder #70070"
																	},
																	{
																			"id": 93410,
																			"name": "Folder #77212"
																	},
																	{
																			"id": 21347,
																			"name": "Folder #32505"
																	},
																	{
																			"id": 88855,
																			"name": "Folder #49405"
																	},
																	{
																			"id": 68831,
																			"name": "Folder #70523"
																	},
																	{
																			"id": 40619,
																			"name": "Folder #29284"
																	}
															]
													},
													{
															"id": 94135,
															"name": "Folder #65582"
													},
													{
															"id": 31314,
															"name": "Folder #17839"
													}
											]
									},
									{
											"id": 2782,
											"name": "Folder #55341"
									},
									{
											"id": 80225,
											"name": "Folder #26722"
									},
									{
											"id": 50264,
											"name": "Folder #17578"
									},
									{
											"id": 47978,
											"name": "Folder #36708"
									}
							]
					},
					{
							"id": 30359,
							"name": "Folder #31553",
							"children": []
					}
			]
	},
	{
			"id": 92710,
			"name": "Folder #82548",
			"children": [
					{
							"id": 54960,
							"name": "Folder #88481"
					},
					{
							"id": 74919,
							"name": "Folder #46646"
					}
			]
	},
	{
			"id": 25107,
			"name": "Folder #63190"
	}
];
