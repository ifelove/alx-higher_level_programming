#!/usr/bin/python3
import MySQLdb
import sys


if __name__ == "__main__":
    database = MySQLdb.connect(host="localhost", user=sys.argv[1],
                         passwd=sys.argv[2], database=sys.argv[3], port=3306)
    connect = database.cursor()
    connect.execute("""SELECT * FROM states WHERE name
                LIKE BINARY 'N%' ORDER BY states.id""")
    rows = connect.fetchall()
    for row in rows:
        print(row)
    connect.close()
    database.close()
