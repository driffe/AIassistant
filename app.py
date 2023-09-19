import flet
from flet import * 
from datetime import datetime
import sqlite3


def main(page: Page):
    page.horizontal_alignment = "center"
    page.vertical_alignment = "center"

    _main_column = Column(
        scroll="hidden",
        expand=True,
        alignment=MainAxisAlignment.START,
        controls=[
            Row(
                alignment=MainAxisAlignment.SPACE_BETWEEN,
                controls=[
                    Text("To-Do Items", size=18, weight="bold"),
                    IconButton(
                        icons.ADD_CIRCLE_ROUNDED,
                        icon_size=18,
                        on_click=lambda e: CreateToDoTask(e),                        
                    ),
                ],
            )
        ],
    )
    pass

if __name__ == "__main__":
    flet.app(target=main)