import React, { useMemo } from 'react'
import {
	View,
	Text,
	StyleSheet,
	SectionList,
	SectionListData,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TransactionCard from '../../../components/TransactionCard/TransactionCard'
import { customerTransactionData } from '../../../constants/appConstants'
import {
	backgroundColorMain,
	bgColorSecondary,
	whiteColor,
	blackColor,
} from '../../../static/colors'

interface Transaction {
	id: number
	date: string
	category: string
	price: number
	time: string
}

interface Section extends SectionListData<Transaction> {
	title: string
}

const Transactions: React.FC = () => {
	const sortedAndGroupedData: Section[] = useMemo(() => {
		const today = new Date()

		// Sort transactions by date, closest to today first
		const sortedData = [...customerTransactionData].sort((a, b) => {
			const diffA = Math.abs(new Date(a.date).getTime() - today.getTime())
			const diffB = Math.abs(new Date(b.date).getTime() - today.getTime())
			return diffA - diffB
		})

		// Group transactions by date
		const groupedData = sortedData.reduce<Record<string, Transaction[]>>(
			(acc, transaction) => {
				const date = transaction.date
				if (!acc[date]) {
					acc[date] = []
				}
				acc[date].push(transaction)
				return acc
			},
			{},
		)

		// Convert to format required by SectionList
		return Object.keys(groupedData).map((date) => ({
			title: date,
			data: groupedData[date],
		}))
	}, [])

	const renderSectionHeader = ({
		section: { title },
	}: {
		section: Section
	}) => (
		<View style={styles.stickyHeaderContainer}>
			<View style={styles.stickyHeader}>
				<Text style={styles.stickyHeaderText}>{title}</Text>
			</View>
		</View>
	)

	const renderItem = ({ item }: { item: Transaction }) => (
		<TransactionCard
			amount={item.price}
			date={`${new Date(item.date).toLocaleDateString()} ${item.time}`}
		/>
	)

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity style={styles.iconButton}>
					<MaterialCommunityIcons
						name="arrow-left"
						size={24}
						color={whiteColor}
					/>
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Transactions</Text>
				<TouchableOpacity style={styles.iconButton}>
					<MaterialCommunityIcons name="magnify" size={24} color={whiteColor} />
				</TouchableOpacity>
			</View>

			<View style={styles.content}>
				<View style={styles.filterContainer}>
					<TouchableOpacity style={styles.filterButton}>
						<Text style={styles.filterText}>Download Statement</Text>
						<MaterialCommunityIcons
							name="download"
							size={18}
							color={bgColorSecondary}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.filterButton}>
						<Text style={styles.filterText}>Filter</Text>
						<MaterialCommunityIcons
							name="filter"
							size={18}
							color={bgColorSecondary}
						/>
					</TouchableOpacity>
				</View>

				<SectionList<Transaction, Section>
					sections={sortedAndGroupedData}
					renderItem={renderItem}
					renderSectionHeader={renderSectionHeader}
					stickySectionHeadersEnabled={true}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backgroundColorMain,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: bgColorSecondary,
		paddingVertical: 15,
		paddingHorizontal: 20,
	},
	headerTitle: {
		fontSize: 22,
		fontWeight: '700',
		color: whiteColor,
	},
	iconButton: {
		padding: 10,
	},
	content: {
		flex: 1,
		padding: 20,
	},
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	filterButton: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: whiteColor,
		paddingVertical: 8,
		paddingHorizontal: 12,
		borderRadius: 8,
		shadowColor: blackColor,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	filterText: {
		color: bgColorSecondary,
		fontWeight: '600',
		fontSize: 14,
		marginRight: 5,
	},
	stickyHeaderContainer: {
		alignItems: 'center',
		backgroundColor: backgroundColorMain,
		paddingVertical: 10,
	},
	stickyHeader: {
		backgroundColor: bgColorSecondary,
		padding: 10,
		borderRadius: 20,
		minWidth: 120,
	},
	stickyHeaderText: {
		color: whiteColor,
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
})

export default Transactions
